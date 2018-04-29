import axios from 'axios';

class Auth {

    static login(username, password) {
        const request = axios('http://localhost:5000/login', {
            method: "post",
            withCredentials: true,
            data: {
                username,
                password
            }
        });

        return request
            .then(result => {
                localStorage.setItem('session_logged', result.data.logged);
                localStorage.setItem('session_expire', result.data.expire);

                return result;
            })
            .catch(error => {
                console.error(error); throw error;
            });
    }

    static isLogged() {
        let session_logged = localStorage.getItem('session_logged');
        let session_expire = localStorage.getItem('session_expire');
        return !!session_logged && session_logged && session_expire < new Date().getTime();
    }

    static logout() {
        const request = axios('http://localhost:5000/logout', {
            method: "post",
            withCredentials: true
        });
        return request
            .then(result => {
                console.log('logged out');
                localStorage.removeItem('session_logged');
                localStorage.removeItem('session_expire');
                return result;
            })
            .catch(error => {
                console.error(error); throw error;
            });
    }
}

export default Auth;