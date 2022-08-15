import React from 'react';
import Link from 'next/link';

import { urlfor } from '../lib/client';
import footer from './Footer';

const FooterBanner = ({ footerBanner: {
  discount, largeText1, largeText2, saleTime, smallText, midText, product, buttonText, image, desc
} }) => {
  return (
    <div className='footer-banner-container'>
        <div className='banner-dec'>
          <div className='left'>
            {/* <p>{discount}</p> */}
            <h3>{largeText1}</h3>
            <h3>{largeText2}</h3>
            <h3>{saleTime}</h3>
          </div>
          <div className='right'>
            <p>{smallText}</p>
            <h3>{midText}</h3>
            <p>{desc}</p>

          </div>
          <img src={urlfor(image)}
          classname="footer-banner-image" 
          height={200}
          width={200}></img>
        </div>    
    </div>
  )
}

export default FooterBanner