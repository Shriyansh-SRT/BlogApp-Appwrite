import React, { useState } from 'react'
import authService from '../appwrite/auth'
import {login} from '../store/authSlice'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import {Logo, Button, Input} from './index'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {register, handleSubmit} = useForm();
  const [error, setError] = useState(null); 

  const signup = async (data) => {
    setError(null);
    try {
      const session =await authService.createAccount(data);
      if(session){
        const userData = await authService.getCurrentUser();
        if(userData){
          dispatch(login(userData));
        }
        navigate('/');
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    }

  }

  return (
    <div className='flex items-center justify-center w-full'>
      <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <Logo />
      </div>
      <div className='w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10'>
        <h2 className='text-2xl font-bold mb-5'>Sign Up</h2>
        <p className='text-sm text-gray-500 mb-5'>Already have an account? <Link to="/login" className='text-blue-500'>Login</Link></p>
        {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}

        <form onSubmit={handleSubmit(signup)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Name: "
            type="text"
            placeholder="Enter your name"
            {...register("name", {
              required: true,
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters long",
              },
              maxLength: {
                value: 20,
                message: "Name must be at most 20 characters long",
              },
            })}
          />
          {errors.name && <p className='text-red-600 mt-8 text-center'>{errors.name.message}</p>}
          <Input
            label="Email: "
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              validate: {
                matchPattern: (value) => 
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  "Email address must be a valid address",
              }
            })}
          />
          {errors.email && <p className='text-red-600 mt-8 text-center'>{errors.email.message}</p>}
          <Input
            label="Password: "
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: "Password is required",
              minLength:{
                value: 6,
                message: "Password must be at least 6 characters long",
              },
              maxLength:{
                value: 20,
                message: "Password must be at most 20 characters long",
              },
            })}
          />
          {errors.password && <p className='text-red-600 mt-8 text-center'>{errors.password.message}</p>}
          <Button
            type="submit"
            className="w-full"
          >
            Sign Up
          </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup