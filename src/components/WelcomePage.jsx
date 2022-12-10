import React from 'react'
import successImg from '../assets/successImg.png'
import './welcomepage.css'

const WelcomePage = () => {
  let data = JSON.parse(sessionStorage.getItem("data"))
  return (
    <div className='welcome-container'>
      <div className='hero-container'>
        <div className='hero-left'>
          <img src={successImg} alt='SuccessImage' className='hero_left-img' />
        </div>
        <div className='hero-right'>
          <div className='hero-right_text'>
            <h2>Successfully logged in</h2>
            <p>{data.userEmail}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomePage