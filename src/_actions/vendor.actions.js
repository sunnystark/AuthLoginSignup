import { userService } from '../_services/';
import { history } from '../_helpers';

export const vendorAction = {
    getVendor,
    onChangeProps,
    getUsers,
    deleteVendorById,
  };

function getVendor(){
    return dispatch => {
        let apiEndpoint = '/tasks/todaytask';
        userService.get(apiEndpoint)
        .then((response)=>{
            console.log('data data ', response);
            dispatch(changeVendorsList(response.data));
        })
        .catch((err)=>{
            console.log("Error");
            console.log(err);
        })
    };
}

function getUsers(){
    return dispatch => {
        let apiEndpoint = '/tasks';
        userService.get(apiEndpoint)
        .then((response)=>{ 
            dispatch(changeVendorsList(response.data));
        })
        .catch((err)=>{
            console.log("Error");
            console.log(err);
        })
    };
}


function onChangeProps(props, event){
    return dispatch =>{
        dispatch(handleOnChangeProps(props, event.target.value));
    }
}

function deleteVendorById(id){
    return dispatch => {
        let apiEndpoint = '/tasks/'+ id;
        userService.deleteDetail(apiEndpoint)
        .then((response)=>{
            dispatch(deleteVendorsDetails());
            dispatch(vendorAction.getVendor());
        })
    };
}

export function changeVendorsList(vendor){
    return{
        type: "FETECHED_ALL_VENDOR",
        vendor: vendor
    }
}

export function sendReport(){
    return{
        type: "REPORT_SENT_SUCCESSFULLY"
    }
}

export function getTaskDetails(vendor){
    return{
        type: "FETECHED_TASK",
        vendor: vendor
    }
}

export function handleOnChangeProps(props, value){
    return{
        type: "HANDLE_ON_CHANGE",
        props: props,
        value: value
    }
}

export function deleteVendorsDetails(){
    return{
        type: "DELETED_VENDOR_DETAILS"
    }
}