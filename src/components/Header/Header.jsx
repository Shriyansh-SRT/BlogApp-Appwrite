import React from 'react'
import authService from '../../appwrite/auth'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Logo, LogoutBtn } from '../index'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {

  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.auth.status)
  // const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      path: "/",
      active: true
    },
    {
      name: "Login",
      path: "/login",
      active: !authStatus
    },
    {
      name: "Signup",
      path: "/signup",
      active: !authStatus
    },{
      name: "All Posts",
      path: "/all-posts",
      active: authStatus
    },{
      name: "Add Post",
      path: "/add-post",
      active: authStatus
    },

  ]

  return (
    <header className="shadow-sm bg-white">
      <Container className="flex justify-between items-center">
        <nav>
          <div className='flex items-center gap-3'>
            <Link to="/">
              <Logo width='70px' />
            </Link>
          </div>
          <ul className='flex items-center gap-4'>
            {navItems.map((item) => (
              item.active ? <li key={item.name}>
                <Link to={item.path} className={`${item.active ? 'text-blue-500' : 'text-gray-500'}`}>{item.name}</Link>
              </li> : null
            ))}
            {authStatus && (
              <li><LogoutBtn /></li>
            )}
          </ul>
        </nav>
      </Container>


    </header>
  )
}

export default Header