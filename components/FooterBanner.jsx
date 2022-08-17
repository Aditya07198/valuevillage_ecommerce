import React from 'react';
import Link from 'next/link';
<link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
    />


import { urlfor } from '../lib/client';
import footer from './Footer';

const FooterBanner = ({ footerBanner: {
  discount, largeText1, largeText2, saleTime, smallText, midText, product, buttonText, image, desc
} }) => {
  return (
    // <div className='footer-banner-container'>
    //     <div className='banner-dec'>
    //       <div className='left'>
    //         {/* <p>{discount}</p> */}
    //         <h3>{largeText1}</h3>
    //         <h3>{largeText2}</h3>
    //         <h3>{saleTime}</h3>
    //       </div>
    //       <div className='right'>
    //         <p>{smallText}</p>
    //         <h3>{midText}</h3>
    //         <p>{desc}</p>

    //       </div>
    //       {/* <img src={urlfor(image)}
    //       classname="footer-banner-image" 
    //       height={200}
    //       width={200}></img> */}
    //     </div>    
    // </div>

    <div class="container">
      <h1>Our Services</h1>
      <div class="row">
        <div class="service">
          <i class="fas fa-laptop-code"></i>
          <h2>Auction</h2>
          <p>
            We do offline auctions of the items we have in many different country. 
            To know more about the auction <Link href='/ContactForm'>contact us</Link> and we will get back to you.
          </p>
        </div>
        
      </div>
    </div>
  )
}

export default FooterBanner