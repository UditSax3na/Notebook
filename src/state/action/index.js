import { SET_DETAILS, UNSET_DETAILS } from '@/state/action/Types';
export const SetCredentails = (Details) => {
    return (dispatch)=>{
        dispatch({
            type:SET_DETAILS,
            payload:Details
        })
    }
}
export const UnSetCredentails = (Details) => {
    return (dispatch)=>{
        dispatch({
            type:UNSET_DETAILS,
            payload:Details
        })
    }
}