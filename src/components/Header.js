import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'
const Header = () => {
 return (
  <div className='header_container'>
   <div className="container">
     <div className="header_content">
      <div className="logo_container">
         <h1>ReduxStore</h1>
      </div>
     </div>
   </div>
  </div>
 )
}

export default Header
