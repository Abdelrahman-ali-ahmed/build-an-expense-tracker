import{ ACTION_ADD_TRANSICTION, ACTION_BALANCE, ACTION_EXPANCE, ACTION_HISTORY, ACTION_INCOME}from"./actionType";
// export function SelectCategory(dispatch){
//     let category={type:ACTION_CATEGORY};
//     return  dispatch (category);
// };

export const  handelBalance= (payload)=>({
    type:ACTION_BALANCE,
    payload,
})


export const  handelIncome= (payload)=>({
    type:ACTION_INCOME,
    payload,
})
export const  handelExpense= (payload)=>({
    type:ACTION_EXPANCE,
    payload,
})
export const  handelHistory= (payload)=>({
    type:ACTION_HISTORY,
    payload,
})
export const  handelAddTransiction= (payload)=>({
    type:ACTION_ADD_TRANSICTION,
    payload,
})