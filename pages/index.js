import React from 'react'

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } 
from '../components';
import logo from '../image/logo.jpeg';

import{useSession} from 'next-auth/react';


const home = ({ products, bannerData }) => {

  const {data: session} = useSession();
  console.log(session);

  console.log(logo);
  if(session) {
    return (
        <div>
            <p>Welcome, {session.user.name}</p>
            <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
        
        <div className='products-heading'>
          <h2>Best Selling Product</h2>
          <p>New Collectible List</p>
        </div>
  
        <div className='products-container'>
          {products?.slice(0, 4).map(
            (product) => <Product key={product._id} product={product}/>)}
        </div>
  
        <FooterBanner footerBanner={bannerData && bannerData[0]} />
      
        </div>
    )
}
  
  return (
    
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
        
      <div className='products-heading'>
        <h2>Best Selling Product</h2>
        <p>New Collectible List</p>
      </div>

      <div className='products-container'>
        {products?.slice(0, 4).map(
          (product) => <Product key={product._id} product={product}/>)}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    
    </div>
  )
}

export const getStaticProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default home;