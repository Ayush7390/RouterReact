import React, { useState } from 'react'
import { Form, useNavigate } from 'react-router-dom'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { toast } from 'react-hot-toast';

const SignupForm = ({setIsLoggedIn}) => {
    const navigate=useNavigate();
    const[showPassword,setShowPassword]=useState(false);
    const[confirmPassword,setConfirmPassword]=useState(false);
    const[FormData,setFormData]=useState({firstName:"",lastName:"", email:"" ,password:"",confirmPassword:""})
    const [accountType,setAccountType]=useState("Student")
    function changeHandler(e){
        setFormData((prevData)=>{
            return  {...prevData,[e.target.name]:e.target.value} 
        })
    }
    function submithandler(e){
        e.preventDefault();
        if(FormData.password!=FormData.confirmPassword){
            toast.error("Password do not match");
        }
        else{
            setIsLoggedIn(true);
            navigate("/dashboard");
            toast.success("Sign in successfully")
        }
        const finalData={...FormData,'accountType':accountType}
        console.log(finalData);
    }
  return (
    <div>
            <div className='flex bg-richblack-800 p-1 gap-x-4 my-6 rounded-full max-w-max'>
                <button className={`${accountType==="Student"
                ?
                "bg-richblack-900 text-richblack-5":"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200 `} onClick={()=>{setAccountType("Student")}}>Student</button>
                <button className={`${accountType==="Instructor"?"bg-richblack-900 text-richblack-5":"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`} onClick={()=>{setAccountType("Instructor")}}>Instructor</button>
            </div>
        <form onSubmit={submithandler} action="">
            <div className='flex justify-between mt-3'>

            <label>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-200'>*</sup></p>
                <input required type="text" name='firstName' value={FormData.firstName} onChange={changeHandler} placeholder='Enter first name' className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '  />
            </label>
            <label>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-200'>*</sup></p>
                <input required type="text" name='lastName' value={FormData.lastName} onChange={changeHandler} placeholder='Enter last name' className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] ' />
            </label>
            </div>
            <div className='mt-3'>
                <label  >
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address <sup className='text-pink-200'>*</sup></p>
                <input required type="email" name="email"  value={FormData.email} placeholder='Enter email address' onChange={changeHandler} className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] ' />
                </label>
                </div>
          
            <div className='flex justify-between mt-3'>
            <label className='relative' >
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Password <sup className='text-pink-200'>*</sup></p>
                <input required type={showPassword?('text'):('password')} name="password"  value={FormData.password} className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] 'placeholder='Enter password' onChange={changeHandler} />  
                <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() => setShowPassword(!showPassword)} >
                    {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
                </span>
                </label>
                <label  className='relative' >
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password <sup className='text-pink-200'>*</sup></p>
                <input required type={confirmPassword?('text'):('password')} name="confirmPassword" value={FormData.confirmPassword} placeholder='Confirm password'onChange={changeHandler} className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '/>
                <span  className='absolute right-3 top-[38px] cursor-pointer'onClick={() => setConfirmPassword(!confirmPassword)}>
                    {confirmPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
                </span>
                </label>
            </div>
            <button className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>Create Account</button>
        </form>
    </div>
  )
}

export default SignupForm