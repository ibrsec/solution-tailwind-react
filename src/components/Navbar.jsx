import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from "../img/logo.png";
import {  NavLink} from "react-router-dom";
const navigation = [ 
  { name: 'Home', href: '/', current: false },
  { name: 'Product', href: 'product', current: false },
  { name: 'Blog', href: 'blog', current: false }, 
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="  bg-[#D7E5CA]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-[120px] flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 ring-2 ring-[#85AF35] hover:bg-[#85AF35] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-between  ">
                <div className="flex flex-shrink-0 items-center  ">
                  <h1 className='logo flex align-items-center gap-2 font-[600] text-xl'>
                    <img src={logo} width="30px" alt="" /><p>Solution</p></h1>
                </div>
                <div className="hidden sm:ml-6 sm:block    ">
                  <div className="flex space-x-4 ">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium transition-all'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
                <button className='btn'>Start Free</button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"> 
              
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  as="a"
                  to={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-black  hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium transition-all'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
