"use client"

import { Button } from 'flowbite-react';
import React, { useState, useContext } from 'react';
import Image from 'next/image'
import { signUpContext } from '@/context/Context';

const AddLocationComponent = () => {

    const handleNext 
  return (
    <div className='flex justify-center items-center h-full'>
            <div className="px-12 py-12 bg-white rounded-3xl flex flex-col">
                <div>
                    <h1 className=' text-rose-600 text-center text-4xl mt-4'>Prometo Food</h1>
                    <h1 className=' text-rose-600 text-center text-4xl'>Trucks</h1>
                </div>
                <div>
                    <h2 className="text-center my-4">Add Menu Items</h2>
                </div>
                <div id='ItemInputs' className="flex flex-col">
                </div>
                <div>
                    <button className="rounded-lg text-xs w-full my-2 h-customButton" onClick={handleAddItem}>+</button>
                </div>
                <div>
                    <Button className="w-full bg-btn font-light my-4" onClick={handleNext} >Next</Button>
                </div>
            </div>
        </div>
  )
}

export default AddLocationComponent