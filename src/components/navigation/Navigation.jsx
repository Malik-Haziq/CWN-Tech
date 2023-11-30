import '../../css/index.css'
import logo from '@icons/logo.svg'
import mail from '@icons/mail.svg'
import phone from '@icons/phone.svg'
import downArrow from '@icons/chivron-down.svg'
import menu from '@icons/menu.svg'
import cross from '@icons/cross.svg'
import Button from '@components/button/button'
import { useState } from 'react'
export default function Navigation() {
  const [showNav, setShowNav] = useState(true)
  return (
    <nav>
      <div className='bg-secondary padding flex gap-8 justify-end text-para'>
        <a href="mailto:info@codewithnaqvi.com" className='flex gap-2 items-center justify-center'><img src={mail} alt="mail icon" className='w-5'/><span>contact@codewithnaqvi.com</span></a>
        <a className='flex gap-1 items-center justify-center'><img src={phone} alt="phone icon" className='w-4'/>+923074485229</a>
        <a className='flex gap-1 items-center justify-center'><img src={phone} alt="phone icon" className='w-4'/>+923054388079</a>
      </div>
      <div className='padding flex justify-between items-center relative'>
        <img src={logo} alt="cwn logo" />
        <img src={menu} alt="menu" className='w-8 absolute right-0'/>
        <img src={cross} alt="Close" className='w-8 absolute right-0'/>
        <div>
          <ul className='absolute left-11 top-full flex flex-col gap-10'>
            <li><a href="#" className='flex gap-2 items-center justify-center hover:text-main-shade duration-300'><span>About</span><img src={downArrow} alt="down arrow" className='w-4'/></a></li>
            <li><a href="#" className='flex gap-2 items-center justify-center hover:text-main-shade duration-300'><span>Services</span><img src={downArrow} alt="down arrow" className='w-4'/></a></li>
            <li><a href="#" className='flex gap-2 items-center justify-center hover:text-main-shade duration-300'><span>Solutions</span><img src={downArrow} alt="down arrow" className='w-4'/></a></li>
            <li><a href="#" className='hover:text-main-shade duration-300'>Portfolio</a></li>
            <li><a href="#" className='hover:text-main-shade duration-300'>Blogs</a></li>
            <li><a href="#" className='hover:text-main-shade duration-300'>Company</a></li>
          </ul>
        </div>
        <Button text={'Get in Touch'} href={''}/>
      </div>
    </nav>
  );
}