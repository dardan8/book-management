import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

    const navigation = [
    {path: '/',
    name: 'List Book'},

    {path: '/add',
    name: 'Add Book'}
    ]
  return (
<header>
  <div className='header-titles'>
    <h1>Book Management</h1>
    <h3>Manage your books in one place</h3>
    </div>
    <nav>
      {
        navigation.map(nav => (
            <NavLink
            key={nav.name}
            to={nav.path}>
            {nav.name}
            </NavLink>
        ))
      }
      </nav>
</header>
  )
}

export default Header