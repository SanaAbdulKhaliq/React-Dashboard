import React from 'react'
import Sidebar from './Sidebar'

const Layout = ({children}) => {
  return (
    <div className='grid grid-cols-12 h-[100vh]'>
        <div className='col-span-2 border-r border-gray-300 shadow-md'>
            <h2 className='font-semibold text-2xl mx-5 my-6'>
                React Dashboard
            </h2>
            <Sidebar />
        </div>
        <div className='col-span-10'>
            {children}
        </div>
    </div>
  )
}

export default Layout