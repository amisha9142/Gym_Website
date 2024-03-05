import React from 'react';
import YouTube from 'react-youtube';

function About() {
  const videoId =  'PO6kJqn97G8';
  const videosId = '9RHYmcKMSZ8';
  return (
    <div>
      <h1 className='font-bold text-3xl text-center margin-auto mt-8 mb-8'>About Us</h1>
      <p className='text-center mx-10 font-normal'>Our gym is dedicated to providing a fun and challenging workout experience for people of all fitness levels. We offer a variety of classes and training programs to help you achieve your health and fitness goals.<br/><br/>

Our trainers are experienced professionals who are passionate about helping you succeed. Whether you're just starting out or looking to take your fitness to the next level, we're here to support and motivate you every step of the way.</p>
   

    <div className='flex justify-between items-center mt-20 mb-20'>
      <YouTube videoId={videoId} style={{width:"500px"}}/>
      <YouTube videoId={videosId} style={{width:"500px"}}/>
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



    </div>
  )
}

export default About
