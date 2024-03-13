import React from 'react'
import body from './body.avif';
import advance from './advance.avif';
import personal from './personal.avif';

function Classes() {
  return (
    <>
    <h1 className='font-bold text-4xl text-center mt-10 mb-10'>Training Programs</h1>
    <div className='flex-row sm:flex justify-end'>
    <h1 className='pl-10'><span className='text-2xl font-bold'>Beginner Program</span><br/><br/>
    <span>Our beginner program is designed for those who are new to working out or have been away from the gym for an extended period of time. This program is focused on building a strong foundation of strength and conditioning while also introducing proper form and technique for common exercises.</span><br/><br/>
    <span className='text-2xl font-bold'>$99/month</span>
    </h1><br/>
    <img src={body} className='pl-30'/>
    </div><br/><br/><br/>


    <div className='flex-row sm:flex justify-end'>
    <h1 className='pl-10'><span className='text-2xl font-bold'>Advanced Program
    </span><br/><br/>
    <span>Our advanced program is designed for experienced gym-goers who are looking to take their training to the next level. This program is focused on progressive overload and advanced training techniques to help you achieve your fitness goals.</span><br/><br/>
    <span className='text-2xl font-bold'>$149/month</span>
    </h1><br/>
    <img src={advance} className='pl-30'/>
    </div><br/><br/><br/>


    <div className='flex-row sm:flex justify-end'>
    <h1 className='pl-10'><span className='text-2xl font-bold'>Personal Training
    </span><br/><br/>
    <span>For those who prefer one-on-one coaching, we offer personal training sessions with our certified trainers. Our trainers will work with you to create a customized training program based on your specific goals and needs.</span><br/><br/>
    <span className='text-2xl font-bold'>Starting at $79/session</span>
    </h1><br/>
    <img src={personal} className='pl-30'/>
    </div><br/>


    <div className='border border-black flex justify-end p-10 text-white mt-2' style={{backgroundColor:"#210101"}}>
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

export default Classes
