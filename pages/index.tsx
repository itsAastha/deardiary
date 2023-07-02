import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ChevronRightIcon, StarIcon } from '@heroicons/react/20/solid'
import Hero from "../public/hero.png"
import Logo from "../public/ddlogo.jpg"
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import React from 'react'
import { useRouter } from 'next/router';
import { useSession, signIn, signOut } from 'next-auth/react';
import axios from 'axios';

import {
  Bars3Icon,
  HeartIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
const navigation = [
  { name: 'About us', href: '#' },
  { name: 'Our aim', href: '#' },
  { name: 'Features', href: '#' },
]
const features = [
  {
    name: ' Your digital best friend',
    description: 'your ultimate companion for personal growth and productivity that captures your thoughts and experiences with daily diary entries',
    icon: HeartIcon,
  },
  {
    name: 'Task tracker',
    description: 'empowering you to reflect on your journey and track your progress towards achieving your goals.',
    icon: HeartIcon,
  },
  {
    name: 'Mood analysis',
    description: 'Explore the power of visualization as you analyze your mood patterns through insightful graphs, unlocking a deeper understanding of yourself.',
    icon: HeartIcon,
  },
  {
    name: 'Update anytime',
    description: 'With the ability to view and update past entries, you can witness your personal growth over time.',
    icon: HeartIcon,
  },
  {
    name: 'personalised reminders',
    description: 'to keep you on track, receive daily task reminders seamlessly integrated within your diary entries.',
    icon: HeartIcon,
  },
]

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  async function fetchData() {
    try {
      const name = session.user.name;
      const email = session.user.email;
      const date = new Date().toLocaleDateString();
      var userurl = "https://flask-production-b246.up.railway.app/user?email="+email+"&date="+date+"&name="+name;
      const response = await axios.get(userurl);
      const jsonData = response.data;
  
      console.log(jsonData); // Do something with the API response data
    } catch (error) {
      console.error('Error fetching JSON data:', error);
    }
  }
const router = useRouter();
const { data: session } = useSession();
{
    if (session) {
      fetchData();
      router.push('/dashboard');
}
if (!session) {
  return (
    <main className={` ${inter.className}`}>
      <div className="bg-white">
      <div className="relative overflow-hidden">
        <Popover as="header" className="relative">
          <div className="bg-white pt-1">
            <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6" aria-label="Global">
              <div className="flex flex-1 items-center">
                <div className="flex w-full items-center justify-between md:w-auto">
                  <a href="#">
                    <span className="sr-only">Your Company</span>
                    <Image
              src={Logo}
              alt={""}
              className="w-20 rounded-lg transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110  duration-300"
            />
                  </a>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="hidden space-x-8 md:ml-10 md:flex">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-gray-700 hover:text-gray-300"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="hidden md:flex md:items-center md:space-x-6">
                <button onClick={() => signIn()} className="text-base font-medium text-white px-5 rounded py-2 hover:text-gray-300 bg-gradient-to-r from-teal-500 to-cyan-600">
                  Log in
                </button>
                
              </div>
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top transform p-2 transition md:hidden">
              <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                <div className="flex items-center justify-between px-5 pt-4">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?from-color=teal&from-shade=500&to-color=cyan&to-shade=600&toShade=600"
                      alt=""
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="pt-5 pb-6">
                  <div className="space-y-1 px-2">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="mt-6 px-5">
                    <a
                      href="#"
                      className="block w-full rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 py-3 px-4 text-center font-medium text-white shadow hover:from-teal-600 hover:to-cyan-700"
                    >
                      Start free trial
                    </a>
                  </div>
                  <div className="mt-6 px-5">
                    <p className="text-center text-base font-medium text-gray-500">
                      Existing customer?{' '}
                      <a href="#" className="text-gray-900 hover:underline">
                        Login
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
        <main>
          <div className="bg-gray-900 pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="mx-auto max-w-md px-6 sm:max-w-2xl sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                  <div className="lg:py-24">
                    <a
                      href="#"
                      className="inline-flex items-center rounded-full bg-black p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base"
                    >
                      <span className="rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 px-3 py-0.5 text-sm font-semibold leading-5 text-white">
                        Login
                      </span>
                      <span className="ml-4 text-sm">To use the app</span>
                      <ChevronRightIcon className="ml-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                    </a>
                    <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                      <span className="block"></span>
                      <span className="block bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text pb-3 text-transparent sm:pb-5">
                       Dear Diary
                      </span>
                    </h1>
                    <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                    A digital diary that aims to be your best hustle buddy.
                    </p>
                    <div className="mt-10 sm:mt-12">
                     
                    </div>
                  </div>
                </div>
                <div className="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
                  <div className="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0">
                    {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                  
                    <Image
              src={Hero}
              alt={""}
              className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
            />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature section with screenshot */}
          <div className="relative bg-gray-50 pt-16 sm:pt-24 lg:pt-32">
            <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
              <div>
                <h2 className="text-lg font-semibold text-cyan-600">All in one AI powered digital journal</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Dear diary, was I the best version of myself today?
                </p>
                <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
                Welcome to our journal/diary app, where self-reflection meets productivity! With our innovative features, you can gain deeper insights into your moods, set and track your goals, and ultimately unlock your true potential.
                </p>
              </div>
              <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
                <img
                  className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
                  src="https://tailwindui.com/img/component-images/green-project-app-screenshot.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* Feature section with grid */}
          <div className="relative bg-white py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
              <h2 className="text-lg font-semibold text-cyan-600">We'll make it possible.</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Everything you need to deploy your app
              </p>
              <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
              Embrace this journey and embark on a path to a more fulfilled and purposeful life.
              </p>
              <div className="mt-12">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {features.map((feature) => (
                    <div key={feature.name} className="pt-6">
                      <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                        <div className="-mt-6">
                          <div>
                            <span className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 p-3 shadow-lg">
                              <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                            </span>
                          </div>
                          <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
                          <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

       
          {/* CTA Section */}
          <div className="relative bg-gray-900">
            <div className="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100"
                alt=""
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 mix-blend-multiply"
              />
            </div>
            
          </div>
        </main>
        <footer className="bg-gray-50" aria-labelledby="footer-heading">
       
            <div className=" border-t border-gray-200 py-8">
              <p className="text-base text-gray-400 text-center">
                &copy; 2020 DearDiary, Inc. All rights reserved.
              </p>
            </div>
          
        </footer>
      </div>
    </div>
    </main>
  )
}
  }
}
