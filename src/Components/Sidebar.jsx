import React from 'react'
import { Link } from "react-router-dom"
import useActive from '../Hooks/useActive'

const Sidebar = () => {

    const tabs = [
        {
            name : "Dashboard",
            path : "/"
        },
        {
            name : "Icons",
            path : "/icons"
        },
        {
            name : "Map",
            path : "/map"
        },
        {
            name : "Notifications",
            path : "/notifications"
        },
        {
            name : "User Profile",
            path : "/user-profile"
        },
        {
            name : "Table Set",
            path : "/table-set"
        },
        {
            name : "Typography",
            path : "/typography"
        }
    ]

  return (
      <div className='flex flex-col gap-10 mx-5 mt-10 text-[15px] font-semibold text-gray-600'>
      {tabs?.map(x => (
        <div key={x.name}>
          <Link to={x.path} className={`${useActive(x.path)}`}>
            {x.name}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Sidebar