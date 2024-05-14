import React, { useContext } from 'react'
import { signUpContext } from '@/context/Context';

const AddLoginInfoComponent = () => {
    const { username, setUsername, email, setEmail, password, setPassword } = useContext(signUpContext);

    return (
        <div>
            <div>
                <h2 className="text-center my-4">Create an account</h2>
            </div>
            <div className="flex flex-col">
                <p>Username</p>
                <input className=" rounded-lg text-xs w-full my-2" placeholder="Enter a username" type="text" onChange={(e) => setUsername(e.target.value)} />
                <p>Email</p>
                <input className=" rounded-lg text-xs w-full my-2" placeholder="example@email.com" type="text" onChange={(e) => setEmail(e.target.value)} />
                <p>Password</p>
                <input className=" rounded-lg text-xs w-full my-2" placeholder="Enter a password" type="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
        </div>
    )
}

export default AddLoginInfoComponent