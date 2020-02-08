import { SEARCH, USERS, USER, REPOS } from './type'

export const reducer = (state, action) => {
    switch(action.type) {
        case SEARCH:
            return {...state, text: action.payload}
        case USERS:
            return {...state, users: action.payload}
        case USER:
            return {...state, user: action.payload}
        case "param":
            return {...state, login: action.payload}
        default: 
            return state
    } 
}