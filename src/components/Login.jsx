import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import {Button, Input, Select, Logo} from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'

const Login = () => {
  return (
    <div>Login</div>
  )
}

export default Login