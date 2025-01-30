import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import authService from '../../appwrite/auth'

const logoutBtn = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await authService.logout().then(() => {
        dispatch(logout());
      })
    } catch (error) { 
      console.log(error);
    }
  }
  
  return (
    <button 
      className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
      onClick={handleLogout}
    >
      Logout
    </button>
  )
}


export default logoutBtn