

import{ ACTION_ADD_TRANSICTION, ACTION_BALANCE, ACTION_EXPANCE, ACTION_HISTORY, ACTION_INCOME}from"./actionType";
const initialState ={
    balance:0,
    transiction:{name:"",amount:0},
    income:[],
    expense:[],
    history: [{id:"0",text:"200",amount:200}],
    
    

};

const reducer =(state=initialState,action)=>{
    switch(action.type){  
        case ACTION_BALANCE:
        return {...state,balance:action.payload,};
        case ACTION_INCOME:
        return {...state, income:  action.payload,};
        case ACTION_EXPANCE:
        return {...state, expense:  action.payload,};
        case ACTION_HISTORY:
        return {...state, history: action.payload};
        case ACTION_ADD_TRANSICTION:
        return {...state, transiction: [...state.history, action.payload],};
        default:
        return state;


    }
    return state;

}
export default reducer;