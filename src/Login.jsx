import React,{useState} from 'react';
import rope from './rope.jpg';
import { useNavigate } from 'react-router-dom';

function Login() {
const[showPassword,setshowPasssword] = useState(false)
const Navigate = useNavigate();
  return (
    <>

<div className='relative'>
    <img src={rope} style={{width:"1000px",height:"500px",objectfit:"contain"}}/>
    </div>
    <div className='absolute' style={{top:"130px",left:"380px"}}>
     <div className='border border-white bg-white rounded-md shadow-2xl' style={{width:"300px",height:"260px"}}>
    <h1 className='font-bold text-center text-2xl mt-4'>Login</h1>
    <input className='border border-gray-500 mt-5 p-3 ml-7 pl-3 rounded-lg' placeholder="enter your email here..." style={{width:"240px",height:"35px"}}/><br/><br/>

   <div className='relative'>
    <input className='border border-gray-500 ml-7 pl-3 rounded-lg' 
    placeholder="enter your password here..." 
    style={{width:"240px",height:"35px"}}
    type={showPassword ? "password" : "text"}
    />
   </div>
   <div className='absolute' style={{top:"135px", left:"245px"}}>
   <ion-icon 
   name={showPassword ? "eye-off" : "eye"}
   onClick={()=>setshowPasssword(!showPassword)}>
   </ion-icon>
   </div>
<br/>
   
    <button className='border border-black bg-green-900 hover:bg-green-600
     text-white rounded-lg p-1 px-5' style={{marginLeft:"60px"}}>Login</button>

    <button className='border border-black bg-green-900 hover:bg-green-600
     text-white rounded-lg p-1 ml-7 px-2' style={{marginLeft:"10px"}}
     onClick={()=>Navigate('/Form')}>Register</button>
  
    </div>
</div>
    
    <div className='border border-black flex justify-end p-10 text-white' style={{backgroundColor:"#210101"}}>
    <div>
      <h1><b>Gym</b></h1>
      <p>No Pain No Gain</p>
      <ion-icon name="logo-facebook"></ion-icon>
      <ion-icon name="logo-instagram"></ion-icon>
      <ion-icon name="logo-twitter"></ion-icon>
    </div>
    <div className='pr-10' style={{paddingLeft:"400px"}}>
       <h1><b>Home</b></h1>
       <h1 className='hover:text-blue-400 hover:underline'>healthy</h1>
       <h1 className='hover:text-blue-400 hover:underline'>lifestyle</h1>
       <h1 className='hover:text-blue-400 hover:underline'>energy</h1>
       <h1 className='hover:text-blue-400 hover:underline'>food</h1>
    </div>
    <div className='pr-10'>
       <h1><b>About</b></h1>
       <h1 className='hover:text-yellow-400 hover:underline'>wheel</h1>
       <h1 className='hover:text-yellow-400 hover:underline'>muscles</h1>
       <h1 className='hover:text-yellow-400 hover:underline'>tier</h1>
       <h1 className='hover:text-yellow-400 hover:underline'>media</h1>
    </div>
    <div className='pr-10'>
       <h1><b>Classes</b></h1>
       <h1 className='hover:text-pink-500 hover:underline'>martial</h1>
       <h1 className='hover:text-pink-500 hover:underline'>multi</h1>
       <h1 className='hover:text-pink-500 hover:underline'>stamina</h1>
       <h1 className='hover:text-pink-500 hover:underline'>motors</h1>
    </div>
    <div className='pr-10'>
       <h1><b>Blogs</b></h1>
       <h1 className='hover:text-green-500 hover:underline'>living</h1>
       <h1 className='hover:text-green-500 hover:underline'>vitamin</h1>
       <h1 className='hover:text-green-500 hover:underline'>iron</h1>
       <h1 className='hover:text-green-500 hover:underline'>pulses</h1>
    </div>
    </div>
    <div className='text-center'>
    <p>@2024 is all right &copy; reserved</p>
    </div>

     
    </>
  )
}

export default Login

