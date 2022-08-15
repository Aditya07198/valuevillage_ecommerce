import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { Cart } from './';
import {useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className='navbar-container'>
      <Link href="/">
        <img className='logo'></img>
      </Link>
      <Link href='/'>Home</Link>
      <Link href='/productlist'>Product List</Link>
      <Link href='/aboutus'>About</Link>
      <Link href='/ContactForm'>Contact</Link>
      <Link href='/login'>Login</Link>
      {/* <Link href='/account'>Account</Link> */}

      <button type='button' className='cart-icon' onClick={() =>setShowCart(true)}>
          <AiOutlineShopping/>
          <span className='cart-item-qty'>{totalQuantities}</span>
      </button>
      {showCart && <Cart/>}
    </div>
  )
}

export default Navbar