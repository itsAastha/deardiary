import { useSession, signIn, signOut } from 'next-auth/react';
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react';
import { useEffect } from 'react';
import {
  Bars3BottomLeftIcon,
  UserIcon,
  PencilSquareIcon,
  PresentationChartBarIcon,
  ClipboardDocumentCheckIcon,
  BellIcon,
  CalendarIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import logo from "../public/ddlogo.jpg";
import Image, { StaticImageData } from "next/image";
import { useRouter } from 'next/router';

const navigation = [
  { name: 'Dashboard', href: '#', icon: PresentationChartBarIcon, current: true },
  { name: 'Diary', href: '#', icon: PencilSquareIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Goals', href: '#', icon: ClipboardDocumentCheckIcon, current: false },
  { name: 'My details', href: '#', icon: UserIcon, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  var session = useSession();
  session=session.data;
  const router = useRouter();

  {
      return (
        <>
         
          <div>
            <Transition.Root show={sidebarOpen} as={Fragment}>
              <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
                <Transition.Child
                  as={Fragment}
                  enter="transition-opacity ease-linear duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity ease-linear duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                </Transition.Child>
    
                <div className="fixed inset-0 z-40 flex">
                  <Transition.Child
                    as={Fragment}
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                  >
                    <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-100 pt-5 pb-4">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                          <button
                            type="button"
                            className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            onClick={() => setSidebarOpen(false)}
                          >
                            <span className="sr-only">Close sidebar</span>
                            <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                          </button>
                        </div>
                      </Transition.Child>
                      <div className="flex flex-shrink-0 items-center px-4">
                      <Image
                    src={logo}
                    alt={""}
                    className="w-60 rounded-lg transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110  duration-300  object-contain"
                  />
                      </div>
                      <div className="mt-5 h-0 flex-1 overflow-y-auto">
                        <nav className="space-y-1 px-2">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? 'bg-lime-400 text-white'
                                  : 'text-gray-300 hover:bg-gray-300 hover:text-white',
                                'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                              )}
                            >
                              <item.icon
                                className={classNames(
                                  item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                                  'mr-4 flex-shrink-0 h-6 w-6'
                                )}
                                aria-hidden="true"
                              />
                              {item.name}
                            </a>
                          ))}
                        </nav>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                  <div className="w-14 flex-shrink-0" aria-hidden="true">
    
                  </div>
                </div>
              </Dialog>
            </Transition.Root>
    
            {/* Static sidebar for desktop */}
            <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex min-h-0 flex-1 flex-col bg-gray-100">
                <div className="flex h-16 flex-shrink-0 items-center bg-white px-4">
                <Image
                    src={logo}
                    alt={""}
                    className="w-20 rounded-lg transition"
                  />
                </div>
                <div className="flex flex-1 flex-col overflow-y-auto">
                  <nav className="flex-1 space-y-1 px-2 py-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-lime-400 text-white' : 'text-gray-400 hover:bg-gray-300 hover:text-white',
                          'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current ? 'text-gray-100' : 'text-gray-400  group-hover:text-gray-50',
                            'mr-3 flex-shrink-0 h-6 w-6'
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:pl-64">
              <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
                <button
                  type="button"
                  className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                  onClick={() => setSidebarOpen(true)}
                >
                  <span className="sr-only">Open sidebar</span>
                  <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                
              </div>
            </div>
          </div>
        </>
      )
    }
}
