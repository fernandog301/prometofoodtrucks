import FormComponent from '@/Components/Form/FormComponent'
import React from 'react'
import { SignUpProvider } from '@/context/Context'
import FoodTruckEditComponent from '@/Components/Form/FoodTruckEditComponent'

function page() {
  return (
    <SignUpProvider>
      <FoodTruckEditComponent/>
    </SignUpProvider>
  )
}

export default page
