import axios from 'axios';
import config from '../config'

const auth = {
    session: {
        valid: false
    },

    async loadSession() {
        let token = localStorage.getItem('session');
        try {
            let json_token = JSON.parse(token);
            this.session.valid = json_token.valid;
            this.session.expires_in = json_token.expires_in;
            this.session.user_id = json_token.user_id;
        } catch (error) {
            console.log(error);
            localStorage.clear();
        }
    },

    sessionExpired() {
        console.log(this.session);

        let not_valid = !this.session.valid;
        let expired = !this.session.expires_in < new Date();

        return not_valid || expired;
    },

    async refresh() {
        try {
            const response = await axios(`${config.apiUrl}/refresh`, {
                method: "post",
                withCredentials: true,
            });

            return response.data;
        } catch (error) {
            return Promise.reject(error.response.data);
        }
    },

    updateSession(response) {
        let session = {
            valid: response.data.valid,
            expires_in: new Date(new Date().getTime() + response.data.expires_in)
        };
        this.session = session;
        localStorage.setItem('session', JSON.stringify(session));
    },

    async login(username, password) {
        try {
            const response = await axios(`${config.apiUrl}/login`, {
                method: "post",
                withCredentials: true,
                data: {
                    username,
                    password
                }
            });

            if (response.data) {
                this.session.valid = response.data.valid;
                this.session.expires_in = response.data.expires_in;
                this.session.user_id = response.data.user_id;

                localStorage.setItem('session', JSON.stringify(this.session));
            }

            return response.data;
        } catch (error) {
            return Promise.reject(error);
        }
    },

    async logout() {
        try {
            await axios(`${config.apiUrl}/logout`, {
                method: "post",
                withCredentials: true,
            });
        } catch (e) {
            // even if error occur during logout, clear local storage
        }

        localStorage.clear();
        this.session = {
            valid: false
        }
    },

    isLogged() {
        return this.session.valid;
    }
};

let alreadyFetching = false;
let subscribers = [];

async function refreshTokenInterceptor(error) {

    try {
        const {response: errorResponse} = error;
        const retryOriginal = new Promise(resolve => {
            let callback = () => {
                resolve(axios(errorResponse.config));
            };
            subscribers.push(callback);
        });

        // fetch the refreshed access token
        if (!alreadyFetching) {
            alreadyFetching = true;
            let response = await auth.refresh();
            if (!response.data) {
                return Promise.reject(error);
            }

            // update session data
            auth.updateSession(response);

            // run call before token refresh
            alreadyFetching = false;
            subscribers.forEach(callback => callback());
            subscribers = [];
        }

        return retryOriginal;
    } catch (error) {
        return Promise.reject(error);
    }
}

function tokenExpired(error) {
    if (error.response) {
        if (error.response.status === 401) {
            if (error.response.data.msg) {
                if (error.response.data.msg.includes('expired')) {
                    return true;
                }
            }
        }
    }

    return false;
}

// implement token refreshing without user interaction
axios.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        if (tokenExpired(error)) {
            return refreshTokenInterceptor(error);
        }

        return Promise.reject(error);
    }
);

auth.loadSession();
export default auth;
