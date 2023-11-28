import '../../css/index.css'
import logo from '../../../assets/icons/logo.svg'
import mail from '../../../assets/icons/mail.svg'
import phone from '../../../assets/icons/phone.svg'
import downArrow from '../../../assets/icons/chivron-down.svg'
import Button from '../button/button'
export default function Navigation() {
  return (
    <nav>
      <div className='bg-secondary padding flex gap-8 justify-end text-para'>
        <a href="mailto:info@codewithnaqvi.com" className='flex gap-2 items-center justify-center'><img src={mail} alt="mail icon" className='w-5'/><span>contact@codewithnaqvi.com</span></a>
        <a className='flex gap-1 items-center justify-center'><img src={phone} alt="phone icon" className='w-4'/>+923074485229</a>
        <a className='flex gap-1 items-center justify-center'><img src={phone} alt="phone icon" className='w-4'/>+923054388079</a>
      </div>
      <div className='padding flex justify-between items-center'>
        <img src={logo} alt="cwn logo" />
        <div>
          <ul className='flex items-center justify-center gap-10'>
            <li><a href="#" className='flex gap-1 items-center justify-center'><span>About</span><img src={downArrow} alt="down arrow" className='w-5'/></a></li>
            <li><a href="#" className='flex gap-1 items-center justify-center'><span>Services</span><img src={downArrow} alt="down arrow" className='w-5'/></a></li>
            <li><a href="#" className='flex gap-1 items-center justify-center'><span>Solutions</span><img src={downArrow} alt="down arrow" className='w-5'/></a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Company</a></li>
          </ul>
        </div>
        <Button text={'Get in Touch'} href={''}/>
      </div>
    </nav>
  );
}