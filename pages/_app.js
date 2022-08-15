import React from 'react';
import { Layout } from '../components';
import '../styles/globals.css';
import '../styles/about.css';
import '../styles/contact.css';
import {StateContext} from '../context/StateContext';
import ContactForm from '../pages/ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/globals.css';
import {SessionProvider} from 'next-auth/react';




// function MyApp({ Component, pageProps }) {
//   return (
//     <StateContext>
//       <Layout>
//       <Component {...pageProps} />
//       {/* <ContactForm /> */}
//     </Layout>
//     </StateContext>
//   )
// }


// export default function MyApp({ Component, pageProps }) {
//   return(
//   <StateContext><Layout><Component {...pageProps} /></Layout></StateContext>) 
// }


function MyApp({ Component, pageProps, session }) {
  return (
    <StateContext>
      <Layout>
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
    </Layout>
    </StateContext>
  )
}

export default MyApp