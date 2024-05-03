"use client"

import AddLocationComponent from '@/Components/CreateAccount/AddLocation/page'
import AddMenuItemsComponent from '@/Components/CreateAccount/AddMenuItems/page'
import { SignUpProvider } from '@/context/Context'
import React, { useState } from 'react'

const CreateAccount = () => {

  const componentArray = [<AddMenuItemsComponent/>, <AddLocationComponent/>, ]
  const [pageArr, setPageArr] = useState(0);
  const ChangeComponent = () => {
    return componentArray[pageArr]
  }

  return (
    <SignUpProvider>
      <div className='flex justify-center items-center h-full'>
            <div className="px-12 py-12 bg-white rounded-3xl flex flex-col">
                <div>
                    <h1 className=' text-rose-600 text-center text-4xl mt-4'>Prometo Food</h1>
                    <h1 className=' text-rose-600 text-center text-4xl'>Trucks</h1>
                </div>
            
        <ChangeComponent />
        <div>
        <button onClick={() => setPageArr(pageArr + 1)}> WE GO NEXT </button>
        </div>
        </div>
      </div>
    </SignUpProvider>
    
  )
}

export default CreateAccount