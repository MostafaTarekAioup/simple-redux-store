import React , {useEffect} from 'react'
import SingleProduct from './SingleProduct'
import {useDispatch} from 'react-redux'
import {setProducts} from '../redux/actions/productActions'
import axios from 'axios'
const ProductsContainer = () => {
 const dispatch = useDispatch()

  const fetchProducts = async ()=>{
    const response = await axios.get('https://fakestoreapi.com/products').catch((err)=>{
      console.log('Error',err)
    })
    dispatch(setProducts(response.data))
    console.log(response.data)
  }
  useEffect(()=>{
    fetchProducts()
  },[])
 return (
  <div className='products_container container'>
      <SingleProduct/>
  </div>
 )
}

export default ProductsContainer
