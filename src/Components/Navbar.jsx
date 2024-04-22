import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Logo.svg"
import { toast } from 'react-hot-toast';
const Navbar = (props) => {
    let isLoggedIn=props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto '>
        <Link to="/">
            <img src={logo} alt="logo" width={160} height={32} loading='lazy'/>
        </Link>
        <nav>
            <ul className='flex gap-6 text-richblack-100'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="#">About</Link>
                </li>
                <li>
                    <Link to="#">Contact</Link>
                </li>
            </ul>
        </nav>
        <div className=''>
        {isLoggedIn? 
                <div className='flex text-richblack-100 items-center gap-[15px]'> <Link to="/">
                <button className='bg-richblack-800 text-white py-[8px] px-[12px]  border-richblack-700 rounded-lg' onClick={()=>{
                setIsLoggedIn(false)
                toast.success("Logged out")
            }}>Log out</button>
            </Link>
            <Link to="/dashboard">
                <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px]  border-richblack-700 rounded-lg'>Dashboard</button>
            </Link></div>
                           
            :
            <div className='flex text-white items-center gap-[15px]'>
                 <Link to="/login">
            <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px]  border-richblack-700 rounded-lg' >Log in</button>
        </Link>
        <Link to="/signup">
            <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px]  border-richblack-700 rounded-lg'>Sign up</button>
        </Link>
            </div>
           }
           
            
            
        </div>
    </div>
  )
}

export default Navbar