import * as ActionTypes from './actionTypes';
const initialState={user:null}

export const reducer = (state=initialState,action)=>{
    switch(action.type){
        case ActionTypes.USER_LOGIN :
            {
                return{
                    user : action.payload.user
                }
            }
        default: 
            return state;
    }
}