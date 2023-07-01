import React from 'react'
import {useSession, signIn, signOut} from 'next-auth/react'

const login = () => {
    const {data: session} = useSession();

  
    if(session)
    {
        return (
            <div>
                <img src={session.user.image} alt="" />
                <h1>Logged in as {session.user.email}</h1>
                <h1>Logged in as {session.user.name}</h1>
                <button onClick={() => signOut()}>Sign Out</button>
            </div>
        );
    }
    else
    {
        return (
            <div>
                <h1>Not logged in</h1>
                <button onClick={() => signIn()}>Sign In</button>
            </div>
        );
    }
};

export default login