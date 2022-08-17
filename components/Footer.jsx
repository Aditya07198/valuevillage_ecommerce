import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const footer = () => {
  return (
    <div className='footer-container' style={{ textAlign:"center", background:"#382213", color:"#fff" }} >
      <p>2022 Vintage value All right reserved</p>
      <p className='icons'>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default footer