/* eslint-disable import/no-anonymous-default-export */
import {REGISTER_SUCCESS,REGISTER_FAIL} from "../actions/types";

const initialState = {
    token : localStorage.getItem('token'),
    loading:true,
    isAuthenticated:false,
    user : null
}

export default function( state = initialState,action){
    const{type,payload} = action;
    switch(type){
        case REGISTER_SUCCESS:
            return{
                ...state,
                loading:false,
                token : localStorage.setItem('token',payload),
                isAuthenticated:true
            }
        case REGISTER_FAIL:
            return{
                ...state,
                loading:false,
                token:null,
                isAuthenticated:false
            }
        default : return state
    }
}