"use client"

import { Dropdown, DropdownItem } from 'flowbite-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import UserCirclePlusIcon from '@/assets/svgs/user-circle-plus.svg';
import UserIcon from '@/assets/svgs/user.svg';
import MapComponent from '@/Components/Map/MapComponent';

const HomeComponent = () => {
    const [currentRadius, setCurrentRadius] = useState('5 Miles');

    const router = useRouter();

    const handleRouteLogin = () => {
        router.push('/Login')
    }

    
    const handleRouteSignUp = () => {
        router.push('/SignUp')
    }
  return (
    <div className='flex justify-center items-center h-full flex-col'>
        <div className=' container home-header'>
            <div className='flex flex-col'>
                <div className='flex justify-between items-center p-1'>
                    <h1 className='text-lg'>Food Trucks</h1>
                    <div className='home-button p-1 rounded-md'>
                        <Dropdown className='home-button' label={'Food Trucks Business'} inline>
                            <Dropdown.Item className='home-button' onClick={handleRouteLogin}>Log In to Account</Dropdown.Item>
                            <Dropdown.Item className='home-button' onClick={handleRouteSignUp}>Sign Up To Register</Dropdown.Item>
                        </Dropdown>
                    </div>
                </div>
                <div className='flex justify-center gap-4'>
                    <div className='flex flex-col justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"></path></svg>
                        <p>Food Truck</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"></path></svg>
                        <p>Food Truck</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"></path></svg>
                        <p>Food Truck</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"></path></svg>
                        <p>Food Truck</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='container flex items-center justify-between'>
            <div className='flex gap-2 h-5/6'>
                <div className='home-button p-2 rounded-md'>
                    <Dropdown className='home-button flex ml-12' label='Hours' inline>
                        <button className='home-button px-2 py-1'>Any</button>
                        <button className='home-button px-2 py-1'>Open Now</button>
                        <button className='home-button px-2 py-1'>Custom</button>
                    </Dropdown>
                </div>
                <div className='home-button p-2 rounded-md'>
                    <Dropdown className='home-button ml-16' label='Cuisines' inline>
                        <div className='grid grid-cols-2 gap-x-6 px-3 py-2'>
                            <button>Any</button>
                            <button>Chinese</button>
                            <button>Mexican</button>
                            <button>Indian</button>
                            <button>Seafood</button>
                            <button>Seafood</button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>
                    </Dropdown>
                </div>
            </div>
            <div>
                <div className='home-button p-1 rounded-md'>
                    <Dropdown className='home-button p-2 border-none mb--12' label={`Radius ${currentRadius}`} inline>
                        <p className='cursor-pointer' onClick={() => {setCurrentRadius('5 Miles')}}>5 Miles</p>
                        <Dropdown.Divider />
                        <p className='cursor-pointer' onClick={() => {setCurrentRadius('10 Miles')}}>10 Miles</p>
                        <Dropdown.Divider />
                        <p className='cursor-pointer' onClick={() => {setCurrentRadius('15 Miles')}}>15 Miles</p>
                        <Dropdown.Divider />
                        <p className='cursor-pointer' onClick={() => {setCurrentRadius('20 Miles')}}>20 Miles</p>
                        <Dropdown.Divider />
                        <p className='cursor-pointer' onClick={() => {setCurrentRadius('25 Miles')}}>25 Miles</p>
                        <Dropdown.Divider />
                        <p className='cursor-pointer' onClick={() => {setCurrentRadius('30 Miles')}}>30 Miles</p>
                        <Dropdown.Divider />
                        <p className='cursor-pointer' onClick={() => {setCurrentRadius('Unlimited')}}>Unlimited</p>
                    </Dropdown>
                </div>
            </div>
        </div>
        <div className='map-height container'>
            <MapComponent/>
            {/* <img className='w-full' src="https://s3-alpha-sig.figma.com/img/9d3b/753b/d9b6cf7c948fe1cf974a9defbc8833dc?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kzXH3z~GX5AsfGnN8Dm7Htg7PQOngtiGm~8tAJ7GlhqKoqlxwxLoSEoHqL6q7sDh~2vEAB1ONense99XaDHST3yaxdQOZysCSCJHrQVgn~WHs~rUJ9JCjoJz9EqAZDHuKySY1omEmK3nFQo16hx2zi3IPM9CywnYnv2eXmkz385b93AOz-90KDW~zy6eKXDivlRDsC3dxM5Y8NSoCmhDmMY1GXhIc~7mFFMSiRPfe8Sjs8KJFIsgUfM24p1PJprCuAs~yBdwIUTsRhscPhGvPw1M0SF4Vy7h-FNDJqlmNBn7jTEdi5XMY~3Swcld5OTfYMhX7c5B5-T11vs7p2-MCw__" alt="" /> */}
        </div>
        
    </div>
  )
}

export default HomeComponent