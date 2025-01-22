import React from 'react'
import MainHeader from './MainHeader'
import SubHeader from './SubHeader'

const Header = () => {
  return (
    <div className='md:flex md:flex-col md:w-full shadow-sm'>
      <MainHeader/>
      <SubHeader/>
    </div>
  )
}

export default Header
