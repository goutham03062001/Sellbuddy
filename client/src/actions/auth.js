import axios from "axios";
import { REGISTER_SUCCESS,REGISTER_FAIL, AUTH_ERROR, USER_LOADED } from "./types";
import setAuthToken from "../Components/utils/setAuthToken";

//loadUser
export const loadUser = () => async dispatch=>{
    try {
        if(localStorage.getItem('token')){
            setAuthToken(localStorage.getItem('token'))
        }
        const res = await axios.get("/api/user/auth/me");
        dispatch({
            type : USER_LOADED,
            payload : res.data
        })
    } catch (error) {
        dispatch({
            type : AUTH_ERROR
        })
    }
}

//signup user
export const register = ({name, email, password}) => async dispatch =>{

    try {
        const config = {
            headers:{
                'Content-Type':"application/json"
            }
        }

        const body = JSON.stringify({name, email , password});
        const res = await axios.post("/api/user/auth/signup",body,config);
        dispatch({
            type : REGISTER_SUCCESS,
            payload : res.data
        })
    } catch (error) {

        dispatch({
            type : REGISTER_FAIL,
            
        })
    }   
}