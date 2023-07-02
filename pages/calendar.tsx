import { useSession, signIn, signOut } from 'next-auth/react';
import { Fragment, useState } from 'react'
import Sidebar from '@/components/sidebar'
import { useRouter } from 'next/router';
import Layout from '@/components/layout';

export default function Calendar() {
  const { data: session, status } = useSession();
  const router = useRouter();
  {
    if (status === 'loading') {
      return <div>Loading...</div>;
    }
    if (session){
      return (
        <>
        <Layout>
            <div className='lg:ml-64'>
                Holadddddddddddddddddddddddddddddddddddddd
            </div>
        </Layout>
        </>
      )
    }
    router.push('/login');
    return null;
  }
  
}
