import { useSession, signIn, signOut } from 'next-auth/react';
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react';
import { useEffect } from 'react';
import Topbar from '@/components/topbar';
import Sidebar from '@/components/sidebar'

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
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '/dashboard', onClick: () => signOut({callbackUrl:'http://localhost:3000/login'}) },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Calendar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { data: session, status } = useSession();
  const router = useRouter();
  {
    if (status === 'loading') {
      return <div>Loading...</div>;
    }
    if (session){
      return (
        <>
        <div>
        <Topbar></Topbar>
        <Sidebar></Sidebar>
       </div>
        </>
      )
    }
    router.push('/login');
    return null;
  }
  
}
