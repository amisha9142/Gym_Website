import React from 'react';
import { Link , useNavigate} from 'react-router-dom';

function Header() {
  const Navigate = useNavigate()
  return (
    <div>
      <nav>
        <ul className='flex justify-end border border-black bg-gray-600 h-20 text-white py-8 px-9'>
        <ion-icon name="body" size="large"></ion-icon>
            <li className='px-5 font-semibold  hover:text-black' style={{paddingLeft:"434px"}}>
            <Link to = "/"> Home </Link>
            </li>
            <li className='px-5 font-semibold  hover:text-black'>
            <Link to = "/About"> About </Link>
            </li>
            <li className='px-5 font-semibold   hover:text-black'>
            <Link to = "/Classes"> Classes </Link>
            </li>
            <li className='px-5 font-semibold  hover:text-black'>
            <Link to = "/Blog"> Blog </Link>
            </li>
            <li className='px-5 font-semibold'> 
            <button onClick={()=>Navigate("/Form")} className='border border-black 
            hover:bg-blue-400 bg-green-600 px-3 py-1 rounded-lg'>Join us</button>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
