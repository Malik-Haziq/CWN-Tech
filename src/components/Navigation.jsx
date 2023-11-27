import '../css/index.css'
import logo from '../../public/logo.svg'

export default function Navigation() {
  return (
    <nav>
      <div className='bg-secondary padding flex gap-8 justify-end text-para'>
        <a href="mailto:info@codewithnaqvi.com">contact@codewithnaqvi.com</a>
        <a>+923074485229</a>
        <a>+923054388079</a>
      </div>
      <div className='padding flex justify-between items-center'>
        <img src={logo} alt="cwn logo" />
        <div>
          <ul className='flex items-center justify-center gap-10'>
            <NavListItem item={"Home"}/>
            <li><a href="#">About</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>
        <a href="#">getintoch</a>
      </div>
    </nav>
  );
}

function NavListItem({ item }){
  return <>
     <li><a href="#">{item}</a></li>
  </>
}