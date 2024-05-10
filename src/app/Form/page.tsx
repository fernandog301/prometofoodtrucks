import FormComponent from '@/Components/Form/FormComponent'
import React from 'react'
import { SignUpProvider } from '@/context/Context'

function page() {
  return (
    <SignUpProvider>
      <FormComponent/>
    </SignUpProvider>
  )
}

export default page
