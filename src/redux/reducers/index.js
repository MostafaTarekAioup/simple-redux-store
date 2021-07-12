import {combineReducers} from 'redux'
import { productReduser , selectedProductreduser } from './productReduser'

const redusers = combineReducers({
 allProducts:productReduser,
 singleProduct:selectedProductreduser
})

export default redusers