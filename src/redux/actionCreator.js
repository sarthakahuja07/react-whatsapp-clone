import * as ActionTypes from './actionTypes'

export const userSignIn=(user)=>{
    return{
        type:ActionTypes.USER_LOGIN,
        payload:{
            user:user
        }
    }
}