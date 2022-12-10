import React from 'react'
import { Link } from 'react-router-dom'
import welcome from '../assets/welcome.png'
import './home.css'

const Home = () => {
  return (
    <div className='container'>
      <div className='hero-container'>
        <div className='hero-left'>
          <img src={welcome} alt='welcomeImage' className='hero_left-img' />
        </div>
        <div className='hero-right'>
          <div className='hero-right_text'>
            <h1>Welcome</h1>
            <p>We’re glad you’re here! Sign up to start</p>
            <Link to='/signup'><button className='getstarted-btn'> Get started</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home