import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
const SingleProduct = () => {
  const products = useSelector((state)=> state.allProducts.products)
  
 return<>{
     products.map((productItem)=>{
      const {id , title , image , price , category} = productItem
      return <Link key={id} to={`/product_details/${id}`} className='product_link'>
        <div  className="card_container">
        <div className="image_container">
          <img src={image} alt={title} />
        </div>
        <div className="description">
          <h3 className='product_title'>{title}</h3>
           <div className="product_info">
            <p className='product_price'>$ {price}</p>
              <p>{category}</p>
          </div>
        </div>
      </div>
      
      </Link>
     })
   }

 </>
}

export default SingleProduct
