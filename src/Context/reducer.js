import { SEARCH, USERS, USER, REPOS, PARAM } from './type'

export const reducer = (state, action) => {
    switch(action.type) {
        case SEARCH:
            return {...state, text: action.payload}
        case USERS:
            return {...state, users: action.payload}
        case USER:
            return {...state, user: action.payload}
        case REPOS:
            return {...state, repos: action.payload}
        case PARAM:
            return {...state, logins: action.payload}
        default: 
            return state
    } 
}