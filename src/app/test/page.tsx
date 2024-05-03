import AddLocationComponent from '@/Components/CreateAccount/AddLocation/page'
import FormComponent from '@/Components/Form/FormComponent'
import React from 'react'

const test = () => {
  return (
    <div>
    <div className='flex justify-center items-center h-auto'>
        <div className="px-12 py-12 bg-white rounded-3xl flex flex-col">
            <div>
                <h1 className=' text-rose-600 text-center text-4xl mt-4'>Prometo Food</h1>
                <h1 className=' text-rose-600 text-center text-4xl'>Trucks</h1>
            </div>
            <div>
            <AddLocationComponent/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default test