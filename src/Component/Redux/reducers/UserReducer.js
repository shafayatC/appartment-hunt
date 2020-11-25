import {ADD_TO_USER, REMOVE_TO_USER} from '../actions/userActionss'; 

const intialState = {
    user : [], 
    products : [
                {
                    id: "1", 
                    name: "Asus", 
                    ram : "4gb", 
                    hdd : "1tb"
                },{
                    id: "2", 
                    name: "Acer", 
                    ram : "8gb", 
                    hdd : "2tb"
                },{
                    id: "3", 
                    name: "Dell", 
                    ram : "4gb", 
                    hdd : "500gb"
                },{
                    id: "4", 
                    name: "Lenovo", 
                    ram : "8gb", 
                    hdd : "2tb"
                }
            ]
}


const UserReducer = (state = intialState, action) => {

    switch (action.type){
        case ADD_TO_USER: 
            const newItem = {
                name : action.name,
                email : action.email,
                avatar: action.avatar
            }
            const item = [...state.user, newItem]; 
            sessionStorage.setItem("user", JSON.stringify(item))
            return {...state, user:item}; 
        case REMOVE_TO_USER: 
           /// const cartId = action.cartId;
            const remindUser = null;
            return {...state, user: remindUser}
        default: 
          return state; 
    }
}

export default UserReducer; 