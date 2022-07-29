import axios from 'axios';
import * as types from './actionTypes';

export const getData = () => (dispatch) => {
    dispatch({type:types.REQUEST_BOOKS})
    axios.get("https://hackathondata.herokuapp.com/books")
    .then((r) => {
        dispatch({type:types.SUCCESS_BOOKS,payload:r.data})
    })
    .catch((c) => {
        dispatch({type:types.FAILURE_BOOKS})
    })
} 

export const cartdata =(payload)=>(dispatch)=>{
dispatch({type:types.SUCCESS_CART,payload})
}