import React from 'react'


import { useSession, signIn, signOut } from 'next-auth/react';
import img from '../public/assets/img/loginpage.svg';
import img2 from '../public/assets/img/loginpage.svg';

const Login = (): JSX.Element => {
  const { data:session } = useSession();

  if (session) {
    return (
      <div>
        <div className="bg-white flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 sm:rounded-lg sm:px-10 flex items-center flex-col">
              <div className="mb-3">
                <img src={img} alt="" />
              </div>
              <div>
                <h1 className="text-black">Email: {session.user.email}</h1>
              </div>
              <div>
                <h1 className="text-black">Name: {session.user.name}</h1>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={() => signOut()}
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="bg-white flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 sm:rounded-lg sm:px-10 flex items-center flex-col">
              <div className="mb-3">
                <img src={img2} alt="" />
              </div>
              <h1 className="text-black">Not logged in</h1>
              <div className="mt-4">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={() => signIn()}
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Login;
