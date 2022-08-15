import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const footer = () => {
  return (
    <div className='footer-continer pt-5' style={{ textAlign:"center", background:"#2c7b72", color:"#fff" }} >
      <p>2022 Vintage value All right reserved</p>
      <p className='icons'>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default footer