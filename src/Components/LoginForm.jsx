import React, { useState } from 'react'
import { toast } from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, Navigate, useNavigate } from 'react-router-dom';
const LoginForm = ({setIsLoggedIn}) => {
    const navigate=useNavigate();

    const [FormData,setFormData]=useState({email:"",password:""})
    function changeHandler(e){
        setFormData((prevData)=>{
            return  {...prevData,[e.target.name]:e.target.value} 
        })
    }
    const[showPassword,setShowPassword]=useState(false);
    function submitHandler(e){
        e.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
        }
  return (
    <form onSubmit={submitHandler}className='flex flex-col w-full gap-y-4  mt-6'>
        <label className='w-full ' >
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email address <sup className='text-pink-200'>*</sup></p>
        <input required type="email" name="email" value={FormData.email} onChange={changeHandler} placeholder='Enter email address' className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '  />
        </label>
        <label className='relative' >
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Password <sup className='text-pink-200'>*</sup></p>
        <input required type={showPassword?"text":"password"} name="password" value={FormData.password} placeholder="Enter password" onChange={changeHandler} className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] ' />
        <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() => setShowPassword(!showPassword)} >
                    {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
                </span>
        <Link to="#">
            <p className='text-xs mt-1 max-w-max ml-auto text-blue-100'>Forgot password</p>
        </Link>
        </label>
        <button  className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>Sign In</button>
    </form>
  )
}

export default LoginForm