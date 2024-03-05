import React from 'react';
import shoes from './shoes.avif';
import girl from './girl.avif';
import legend from './legend.avif';

function Blog() {
  return (
    <>
    <div>
    <h1  className='text-4xl font-bold text-center mt-5'>Fitness Blog</h1>
    <div className='flex flex-col text-center'>
      <div className='border border-gray-100 shadow-2xl mt-10 mb-10 justify-center' style={{width:"700px",height:"550px",marginLeft:"160px"}}>
      <img src={shoes} style={{paddingTop:"20px",paddingLeft:"20px",paddingRight:"20px",width:"800px",height:"400px"}}
      />
      <h1 className='text-3xl font-bold mt-5 hover:text-red-600'><u>10 tips for studying motivated on your journey</u></h1>
      <p className='mt-3'> Develop a structured workout plan tailored to your goals and fitness level. Include a variety of exercises targeting different muscle groups and incorporate progressive overload to challenge your body and see results.</p>
      </div>

      <div className='border border-gray-100 shadow-2xl mt-10 mb-10 justify-center' style={{width:"700px",height:"600px",marginLeft:"160px"}}>
      <img src={girl} style={{paddingTop:"20px",paddingLeft:"20px",paddingRight:"20px",width:"800px",height:"400px"}}
      />
      <h1 className='text-3xl font-bold mt-5 hover:text-red-600'><u>Why you should add resistance training to your routine.</u></h1>
      <p className='mt-3'>Resistance training, such as weightlifting, bodyweight exercises, or resistance bands, helps stimulate muscle growth and development. By progressively overloading your muscles with resistance, you can increase muscle mass, strength, and definition.</p>
      </div>


      <div className='border border-gray-100 shadow-2xl mt-10 mb-10 justify-center' style={{width:"700px",height:"550px",marginLeft:"160px"}}>
      <img src={legend} style={{paddingTop:"20px",paddingLeft:"20px",paddingRight:"20px",width:"800px",height:"400px"}}
      />
      <h1 className='text-3xl font-bold mt-5 hover:text-red-600'><u>The importance of proper form of excercise.</u></h1>
      <p className='mt-3'>Proper form helps distribute the workload evenly across the muscles and joints involved in the exercise, reducing the likelihood of strains, sprains, and other injuries. When performed incorrectly,exercises can place undue stress on certain body parts</p>
      </div>
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

export default Blog
