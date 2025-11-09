import React from 'react'
import pic1 from '../assets/Nest.png'
import pic2 from '../assets/SVG.png'
export default function Navbar() {
  return (
     <>
      <div className="navbar bg-base-100 shadow-sm text-black ">
        <div className='container mx-auto flex'>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         <li><a>About</a></li>
      <li><a>Shop</a></li>
      <li><a>Mega Menu</a></li>
      <li><a>Vendors</a></li>
      <li><a>Blog</a></li>
      <li><a>Pages</a></li>
      <li><a>Contact</a></li>
      </ul>
    </div>
    <div>
        <img src={pic1} alt="" />
    </div>
    <div className='flex px-2  font-bold text-[16px]'>
        <img src={pic2} alt="" />
        <a>Hot Deals</a>
        </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal gap-8 font-bold text-[16px]">
      <li><a>About</a></li>
      <li><a>Shop</a></li>
      <li><a>Mega Menu</a></li>
      <li><a>Vendors</a></li>
      <li><a>Blog</a></li>
      <li><a>Pages</a></li>
      <li><a>Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-green-500">Login</a>
  </div>
  </div>
</div>
    </>
  )
}
