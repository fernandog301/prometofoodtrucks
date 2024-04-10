"use client";

import React, { useState } from 'react';
import { Button, Card } from "flowbite-react";
import { useRouter } from 'next/navigation';

const SignUpComponent = () => {

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
    
  let router = useRouter();

  const handleSubmit = () => {
    

    router.push('/Login');
  }


  return (
    <div className='flex justify-center items-center h-full'>
        <div className="px-12 py-12 bg-white rounded-3xl flex flex-col">
          <div>
            <h1 className=' text-rose-600 text-center text-4xl mt-4'>Prometo Food</h1>
            <h1 className=' text-rose-600 text-center text-4xl'>Trucks</h1>
          </div>
          <div>
            <h2 className="text-center my-4">Create an account</h2>
          </div>
          <div className="flex flex-col">
            <p>Username</p>
            <input className=" rounded-lg text-xs w-full my-2" placeholder="Enter a username" type="text" />
            <p>Password</p>
            <input className=" rounded-lg text-xs w-full my-2" placeholder="Enter a password" type="password" />
            <p>Name of Food Truck</p>
            <input className=" rounded-lg text-xs w-full my-2" placeholder="Enter a Food Truck Name" type="text" />
          </div>
          <div>
            <Button className="w-full bg-btn font-light my-4" onClick={handleSubmit}>Sign Up</Button>
          </div>
        </div>
    </div>
  )
}

export default SignUpComponent