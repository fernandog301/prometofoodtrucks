"use client"

import { Button, Card } from 'flowbite-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { createAccount, getLoggedInUserData, login } from '../utils/DataServices'
import { IToken } from '../interfaces/interfaces'

const LogInComponent = () => {

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    
    const router = useRouter();

    const handleSubmit = async () => {
      let userData = {
        username : username,
        password : password
      }

      let token: IToken = await login(userData);

      console.log(token);

      if(token.token != null) {
        localStorage.setItem("Token", token.token)
        getLoggedInUserData(username);
        router.push('/FoodTruck');
      } else {
        alert("Login Failed");
      }
    }

    const handleForgotPassowrd = () => {
        router.push('/ResetPassword')
    }


    return (
        <div className='flex justify-center items-center h-full'>
        <div className="px-12 py-12 bg-white rounded-3xl flex flex-col">
          <div>
            <h1 className=' text-rose-600 text-center text-4xl mt-4'>Prometo Food</h1>
            <h1 className=' text-rose-600 text-center text-4xl'>Trucks</h1>
          </div>
          <div>
            <h2 className="text-center my-4">Find Food Trucks Near You</h2>
          </div>
          <div className='flex flex-col'>
            <p>Username</p>
            <input className=" rounded-lg text-xs w-full my-2" placeholder="Enter a username" type="text" onChange={(e) => setUsername(e.target.value)} />
            <p>Password</p>
            <input className=" rounded-lg text-xs w-full mt-2" placeholder="Enter a password" type="password" onChange={(e) => setPassword(e.target.value)} />
            <a className='hover:cursor-pointer w-full text-right underline text-xs text-blue-600 mt-1' onClick={handleForgotPassowrd}>Forgot Password?</a>
          </div>
          <div>
            <Button className="w-full bg-btn font-light my-4"onClick={handleSubmit}>Sign In</Button>
          </div>
        </div>
    </div>
    )
}

export default LogInComponent