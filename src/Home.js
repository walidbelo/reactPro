import React from 'react'
//import Header from './Header'
 import Main from './Main'
 import Brands from './Brands'
 import Footer from './Footer'
 //import Bio from './bio'
import './css/Home.css';

export default function Home() {
  return (
  <div>
  
    <div className='home'>
          <Main/>
          
        <Brands/>
       <Footer/>
    </div>
    </div>
  )
}
