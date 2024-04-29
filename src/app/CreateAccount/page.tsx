import AddMenuItemsComponent from '@/Components/CreateAccount/AddMenuItems/page'
import { SignUpProvider } from '@/context/Context'
import React from 'react'

const CreateAccount = () => {
  return (
    <SignUpProvider>
        <AddMenuItemsComponent />
    </SignUpProvider>
    
  )
}

export default CreateAccount