import { SET_DETAILS } from "../action/Types";

const defaultSettings = {
    name:'',
    email:'',
    usertoken:'',
    password:'',
    pageno:0,
    pagecontent:[]
}

const reducer = (state=defaultSettings,action)=>{
    if(action.type===SET_DETAILS){
        return {
            ...state,
            name:action.payload.name,
            email:action.payload.email,
            usertoken:action.payload.usertoken,
            password:action.payload.usertoken,
            pageno:action.payload.pageno,
            pagecontent:action.payload.pagecontent
        };
    }else{
        return state;
    }
}

export default reducer;