import React from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } 
from '../components';
import logo from '../image/logo.jpeg';
import{useSession} from 'next-auth/react'


const productlist = ({ products}) => {

  console.log(logo);

  const {data: session} = useSession();
  console.log(session);

  if(session) {
    return (
      <div>
        <p>{session.user.name}</p>
        <div className='products-heading'>
        <h2>Products</h2>
      </div>
        <div id="unique-name">
            <div className='products-container'>
                {products?.map(
                (product) => <Product key={product._id} product={product}/>)}
            </div>
        </div>
      </div>
    )
  }

  return (
    
    <div>
      <div className='products-heading'>
        <h2>Products</h2>
      </div>
        <div id="unique-name">
            <div className='products-container'>
                {products?.map(
                (product) => <Product key={product._id} product={product}/>)}
            </div>
        </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  
  return {
    props: { products}
  }
}

export default productlist;