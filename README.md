# React - Flask - Auth

Simple webserver that implements JWT token authorization.

JWT tokens are stored in HttpOnly cookies, for the sake or security. XCSRF protection needs to be added to guard token from request forgery. Both access token and refresh token are stored in cookies, localStorage contains only expiration date of access token.

Important notes:
- login call must have Allow-Credentials headers, in other case the cookie won't be saved in browser. Save yourself some time debugging it :)
- Server side must allow credentials to be passed in cookie, enable it

TODO:
- Implement CSRF protection (simple)
- Handle token refresh in axios intercept
- Add flash messages for errors

Resources (couple hours of digging):  
https://scotch.io/tutorials/setting-up-webpack-for-any-project  
https://auth0.com/blog/reactjs-authentication-tutorial/  
https://medium.com/the-many/adding-login-and-authentication-sections-to-your-react-or-react-native-app-7767fd251bd1  
https://vladimirponomarev.com/blog/authentication-in-react-apps-creating-components  
https://css-tricks.com/react-router-4/  
https://medium.com/@veelenga/displaying-rails-flash-messages-with-react-5f82982f241c  
https://medium.com/@mateioprea/maintaining-api-authentication-using-axios-e70ba174da6  
http://www.redotheweb.com/2015/11/09/api-security.html  
