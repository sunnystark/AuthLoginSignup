import { userService } from '../_services/';
import { history } from '../_helpers';

export const userActions = {
    login,
    register,
    logout
};

function register(user) {
return dispatch => {
    let apiEndpoint = '/auth/sign-up';
    // let payload = {
    //     user:user
    // }
    userService.post(apiEndpoint, user)
    .then((response) =>{
        //    console.log(response,'register response ');

       dispatch(registerDetails(response.data.data));
                history.push('/home');

    })
}};

function login(email, password){
    return dispatch => {
        let apiEndpoint = '/auth/login';
        let payload = {
            email: email,
            password: password
        }
        userService.post(apiEndpoint, payload)
        .then((response)=>{
            console.log(response,'data')
            
            if (response) {
                localStorage.setItem('token', response.data.data.token);
                localStorage.setItem('userId', response.data.data.user._id);
                dispatch(setUserDetails(response.data.data));
                // let id = response.data.data.user ? response.data.data.user._id : null;
                // history.push(`home/${id}`);
                history.push('/home')
            }
        })
    };
}

function logout(){
    return dispatch => {
        localStorage.removeItem('token');
        dispatch(logoutUser());
        history.push('/');
    }
}

export function setUserDetails(user){
    // console.log('tokenuser', user.token)
    return{
        type: "LOGIN_SUCCESS",
        token: user.token,
        userId: user.user._id
    }
}
export function registerDetails(user){
    return{
        type: "REGISTER_SUCCESS",
        payload: user
    }
}

export function logoutUser(){
    return{
        type: "LOGOUT_SUCCESS",
        token: false
    }
}