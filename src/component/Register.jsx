

import React from 'react'

const Register = () => {

  return (

    <div>
    <form action="" className='flex flex-col justify-center w-[200px] items-center'>
    <input className='border-red-500 bg-yellow-200' placeholder='firstName' type="text" />
    <input className='border-red-500 bg-yellow-200' placeholder='firstName' type="text"  />
    <input className='border-red-500 bg-yellow-200' placeholder='firstName' type="number" name="" id="age" />
    <input className='border-red-500 bg-yellow-200' placeholder='firstName' type="text" />
     <input className='border-red-500 bg-yellow-200' placeholder='firstName' type="email" name="" id="email" />
     <input className='border-red-500 bg-yellow-200' placeholder='firstName' type="password" name="" id="password" />
     <input className='border-red-500 bg-yellow-200' placeholder='firstName' type="password" name="" id="confirm_password" />
      <button>Submit</button>
    </form>



    </div>
  )
}

export default Register