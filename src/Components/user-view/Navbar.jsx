import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { Search, Home, User, Info, Phone, Settings } from 'lucide-react' // Add necessary icons
import { Input } from '../ui/input'

const Navbar = ({isMenuOpen, setIsMenuOpen}) => {
  return (
    <div>
       {/* Navigation */}
       <nav className="bg-white shadow-sm fixed top-0 left-0 w-full z-[9000] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex ">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <img
                  src="https://themes.stackbros.in/eduport_r/assets/logo-22DQx7cW.svg"
                  alt="Eduport Logo"
                  width={130}
                  height={35}
                  className="h-8 w-auto"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8 items-center">
              {[
                { name: "मुख्यपृष्ठ", icon: <Home className="h-5 w-5" /> },
                { name: "लॉगिन", icon: <User className="h-5 w-5" /> },
                { name: "सेवा माहिती", icon: <Info className="h-5 w-5" /> },
                { name: "संपर्क", icon: <Phone className="h-5 w-5" /> },
                { name: "सेवा केंद्र", icon: <Settings className="h-5 w-5" /> }
              ].map(({ name, icon }) => (
                <Link
                  key={name}
                  href="#"
                  className="text-sm font-semibold leading-6 hover:bg-red-100  text-gray-900 hover:text-gray-700 px-3 py-2 rounded-lg transition-all duration-400 hover:animate-out flex items-center space-x-2"
                >
                  {icon}
                  <span>{name}</span>
                </Link>
              ))}
            </div>

            <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
              <Input 
                type="text"
                placeholder='Search'
                className="w-36 h-7 px-3 rounded-xl border-slate-300 placeholder:text-gray-400"
              />
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </div>

            <div className="-mr-2 flex items-center sm:hidden ">
              <Button className="bg-slate-50" variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {["Category", "Demos", "Pages", "Accounts", "Megamenu"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar
