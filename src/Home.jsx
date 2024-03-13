import React from 'react';
import Gym from './Gym.jpeg'

function Home() {
  return (
    <>
    <div className='relative'>
      <img src={Gym} alt="Logo" className='w-full max-h-screen object-cover'/>
   </div>
   <div className='absolute left-20 text-3xl font-bold' style={{top:"95px" ,color:"#1d064d"}}>
     <h1>"Take Care of your <span className='text-red-600'>body.</span><br/>&nbsp; Its the only place you <br/> &nbsp;&nbsp;have to <span className='text-red-600'>live.</span>"</h1>
   </div>


   <div className='flex-row sm:flex md:flex'>
     <div className='border border-gray-200 rounded-lg shadow-2xl' style={{width:"290px",height:"290px",margin:"30px", marginTop:"70px",textAlign:"center"}}><span className='text-2xl font-bold'>Basic <br/>$29.99/mo</span><br/><br/>
     "Our basic gym plan is perfect for beginners and seasoned fitness enthusiasts alike, providing a supportive environment to achieve your fitness goals."<br/><br/>
     <button className='border border-red-600 bg-red-500  text-blue-900 px-2 py-1 pb-1 rounded-lg  hover:bg-red-600 font-bold'><u>Select Plan</u></button>
     </div>

     <div className='border border-gray-200 rounded-lg shadow-2xl'style={{width:"290px",height:"290px",margin:"30px",marginTop:"70px",textAlign:"center"}}><span className='text-2xl font-bold'>Pro<br/>$49.99/mo</span><br/><br/>
     "Upgrade to our Pro Plan for an enhanced fitness experience, tailored to meet the needs of serious athletes and fitness enthusiasts fitness experience
     enhanced fitness.
     ."<br/><br/>
     <button className='border  border-red-600 bg-red-500  text-blue-900 px-2 py-1 pb-1 rounded-lg  hover:bg-red-600 font-bold'><u>Select Plan</u></button>
     </div>

     <div className='border border-gray-200 rounded-lg shadow-2xl' style={{width:"290px",height:"290px",margin:"30px",marginTop:"70px",textAlign:"center"}}><span className='text-2xl font-bold'>Premium<br/>$99.99/mo</span><br/><br/>
     "Our premium gym plan offers a comprehensive wellness experience, including access to exclusive classes, nutrition counseling, and holistic wellness services."<br/><br/>
     <button className='border border-red-600 bg-red-500  text-blue-900 px-2 py-1 pb-1 rounded-lg hover:bg-red-600 font-bold'><u>Select Plan</u></button>
     </div>
     </div> <br/> <br/> <br/>


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

export default Home
