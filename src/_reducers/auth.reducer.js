
let token = localStorage.getItem('token');
let userId = localStorage.getItem('userId');
const initialState = token ? { loggedIn: true, token, userId } : {};
console.log('auth state', initialState)
export function authentication(state = initialState, action) {
 
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      console.log('switch login', action)
      return {
        loggingIn: true,
        userId: action.userId,
        token: action.token
      };
    case 'LOGOUT_SUCCESS':
      return {
        token: false
      };
    default:
      return state
  }
}