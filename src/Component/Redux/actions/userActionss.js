export const ADD_TO_USER = "ADD_TO_USER";
export const REMOVE_TO_USER = "REMOVE_TO_USER"; 

export const AddToUser = (name, email, avatar) => {
    return{type:ADD_TO_USER, name, email, avatar}
}

export const RemoveToUser = email => {
    return {type: REMOVE_TO_USER, email}
}