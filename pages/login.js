import React from 'react'

import{useSession, signIn, signOut} from 'next-auth/react'

const login = () =>{
    
    const {data: session} = useSession();
    console.log(session);
    if(session) {
        return (
            <div className='login'>
                <p>Welcome, {session.user.name}</p>
                <img src={session.user.image} alt=""/>
                <p>{session.user.email}</p>
                <div className='buttons'>
                    <button type='button' className='buy-now' onClick={()=> signOut()}>Sign Out</button>
                </div>
            </div>
        )
    }
    else
    {
        return(
            <div className='login'>
                <p>You are not signed in</p>
                <div className='buttons'>
                    <button type='button' className='buy-now' onClick={()=> signIn()}>Sign in</button>
                </div>
            </div>
        )
    }
}

export default login