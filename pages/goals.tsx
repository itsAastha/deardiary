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
                Holadddddddddddddddddddddddddddddddddddddd
            </div>
        </Layout>
        </>
      )
    };
    router.push('/login');
  return null;
  }
  
}