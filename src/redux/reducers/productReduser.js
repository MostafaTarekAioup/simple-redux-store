import {actionTypes} from '../constants/actions-types'
const initialStates = {
 products:[],
}
const {SET_PRODUCTS , SELECTED_PRODUCT , REMOVE_SELECTED_PRODUCT} = actionTypes

export const productReduser = (state = initialStates, {type , payload})=>{
 
 if(type === SET_PRODUCTS){
  return {...state , products:payload} 
 }

 return state
}

export const selectedProductreduser = (state={}  ,{type,payload})=>{
  if(type === SELECTED_PRODUCT){
  return {...state , ...payload} 
 }
 if(type === REMOVE_SELECTED_PRODUCT){
  return {} 
 }
 return state
}

