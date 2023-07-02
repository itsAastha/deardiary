import { useSession } from 'next-auth/react';
import Layout from '@/components/layout';
import Sidebar from '@/components/sidebar'
import { useRouter } from 'next/router';

export default function Goals() {
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
              <div className='p-5 '>
              <p className='text-xl text-gray-700 font-sans'> Write your goals here, and we'll help you accomplish them! (coming soon!) </p>
              </div>
            </div>
        </Layout>
        </>
      )
    };
    router.push('/login');
  return null;
  }
  
}