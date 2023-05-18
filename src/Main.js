import React from 'react'
import "./css/MainStyle.css"
import { Link } from 'react-router-dom'
 //import image1 from './images/EXPLORE OUR SHOPM.png'
import image2 from './images/menimage.jpg'
import image3 from './images/womenimage.jpg'
import image4 from './images/kidsimage.jpg'
import image5 from './images/access.jpg'
import image6 from './images/realSale.jpg'
export default function Main() {
  return (
    //  <section id='categories-section'>
       <div className="main-container"> 
       <Link to="/explore-products"><img src={image6} className='sales' alt='explore'/></Link>
       <p className='title'>Categories</p>
       <div className="container1">
       <div className="flex-items1"><Link to="/women-section" className="women"><img src={image3} alt='women'/></Link></div>
       <div className="flex-items2"><Link to="/men-section" className="men"><img src={image2} alt='men'/></Link></div>
       </div> 
  <div className="container2">
  
  <div className="flex-items4"><Link to="/kids-section" className="kids"><img src={image4} alt='kids'/></Link></div>
  <div className="flex-items5"><Link to="/accessories-section" className="access"><img src={image5} alt='access'/></Link></div>    
       </div>
    </div>
  )
}