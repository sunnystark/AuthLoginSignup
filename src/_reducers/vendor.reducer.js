import { bindActionCreators } from "redux";

const initialState = { 
    anchor: 'left',
    vendor: [],
    open: false,
    id: '',  
    task: '',
    issues: '',
    help: '',
    client: ''
 };


export function vendor(state = initialState, action) {
    switch (action.type) {
        case 'FETECHED_ALL_VENDOR':
            return {
            ...state,
            vendor: action.vendor
            };
        case 'FETECHED_TASK' :
            return {
                ...state,
                vender: action.vendor
            }    
        case 'VENDOR_DETAIL':
            // console.log('vender action',action)
            return {
                
                ...state,
                id: action.id,  
                task: action.task,
                issues: action.issues,
                help: action.help,
                client: action.client, 
            };
        case "HANDLE_ON_CHANGE":
            return {
                ...state,
                [action.props]: action.value
            };    
        default:
            return state
    }
  }