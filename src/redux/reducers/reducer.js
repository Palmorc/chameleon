import axios from 'axios'

const GET_USER = 'GET_USER'
const GET_USER_FULFILLED = 'GET_USER_FULFILLED'

const LOGOUT_USER = 'LOGOUT_USER'
const LOGOUT_USER_FULFILLED = 'LOGOUT_USER_FULFILLED'

const GET_ITEMS = 'GET_ITEMS'
const GET_ITEMS_FULFILLED = 'GET_ITEMS_FULFILLED'

const GET_ONE = 'GET_ONE'
const GET_ONE_FULFILLED = 'GET_ONE_FULFILLED'




let initialState = {
  userData: null,
  chameleons:[],
  cart: []
}

export default function reducer(state = initialState,action){
  switch(action.type){
    case GET_USER_FULFILLED:
      return{...state, userData: action.payload.data}
    case LOGOUT_USER_FULFILLED:
      return{...state, userData:null}
    case GET_ITEMS_FULFILLED:
      return{...state, chameleons:action.payload.data}
    case GET_ONE_FULFILLED:
      return{...state, chameleons:action.payload.data}
    default:
      return state
  }
}

export function logout(){
  return{
  type: LOGOUT_USER,
  payload: axios.get('/api/logout')
  }
}

export function getUser(){
  return{
    type:GET_USER,
    payload: axios.get('/api/currentuser')
  }
}

export function getItems(){
  return{
    type: GET_ITEMS,
    payload: axios.get('/api/chameleons')
  }
}

export function getOne(id){
  return{
    type: GET_ONE,
    payload: axios.get(`/api/items/${id}`)
  }
}
