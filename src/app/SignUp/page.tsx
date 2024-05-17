"use client";

import React, { useState } from 'react';
import { Button, Card } from "flowbite-react";
import { useRouter } from 'next/navigation';
import { createAccount } from '../utils/DataServices';
import AddMenuItemsComponent from '@/Components/CreateAccount/AddMenuItemsComponent';
import AddTruckComponent from '@/Components/CreateAccount/AddTruckComponent';
import AddLoginInfoComponent from '@/Components/CreateAccount/AddLoginInfoComponent';
import AddAvatarComponent from '@/Components/CreateAccount/AddAvatarComponent';

const SignUpComponent = () => {
  const [i, setI] = useState(0);
  
  let router = useRouter();
  const components = [<AddLoginInfoComponent key="loginInfo"/> ,<AddTruckComponent key="truck"/> ,<AddMenuItemsComponent key="menuItems"/> ,<AddAvatarComponent key="avatar" />]
  const isCompleted = i === components.length - 1
  const isStarting = i === 0
  

  const handleNext = () => {
    if(i < components.length - 1){
      setI(i + 1);
    }
  }
  const handleBack = () => {
    if(i > 0){
      setI(i - 1)
    } else {
      router.push("/")
    }
  }


  return (
    <div className='flex justify-center items-center h-full'>
        <div className="px-12 py-12 bg-white rounded-3xl flex flex-col">
          <div>
            <h1 className=' text-rose-600 text-center text-4xl mt-4'>Prometo Food</h1>
            <h1 className=' text-rose-600 text-center text-4xl'>Trucks</h1>
          </div>
          <div>
            {components[i]}
            
          </div>
          <div className='flex gap-4'>
            <Button className="w-full bg-btn font-light my-4" onClick={handleBack}>{isStarting ? "Home" : "Back"}</Button>
            <Button className="w-full bg-btn font-light my-4" onClick={handleNext}>{isCompleted ? "Sign Up" : "Next"}</Button>
          </div>
        </div>
    </div>
  )
}

export default SignUpComponent