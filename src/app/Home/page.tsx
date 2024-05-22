"use client"

import { Dropdown, DropdownItem } from 'flowbite-react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import MapComponent from '@/Components/Map/MapComponent';
import { IUserData } from '@/interfaces/interfaces';
import Image from 'next/image'

const HomeComponent = () => {
    const [currentRadius, setCurrentRadius] = useState('5 Miles');
    const [foodTrucks, setFoodTrucks] = useState<FoodTruck[]>([]);

    interface FoodTruck {
        Id: number;
        userName: string;
        password: string;
        address: string;
        city: string;
        state: string;
        zipCode: string;
        latitude: number;
        longitude: number;
        name: string;
        image: string;
        schedule: string;
        description: string;
        category: string;
        rating: string;
        isDeleted: boolean;
        itemName: string;
        itemPrice: string;
    }

    const router = useRouter();

    const handleRouteLogin = () => {
        router.push('/Login')
    }

    const handleRouteSignUp = () => {
        router.push('/SignUp')
    }

    useEffect(() => {
        const fetchFoodTrucks = async () => {
            const res = await fetch('/data.json');
            const data: FoodTruck[] = await res.json();
            setFoodTrucks(data);
        };

        fetchFoodTrucks();
    }, []);

    return (
        <div className='flex justify-center items-center h-full flex-col'>
            <div className=' container home-header'>
                <div className='flex flex-col'>
                    <div className='flex justify-between items-center p-1'>
                        <h1 className='text-lg'>Promento Food Trucks</h1>
                        <div className='home-button p-1 rounded-md'>
                            <Dropdown className='home-button' label={'Food Trucks Business'} inline>
                                <Dropdown.Item className='home-button' onClick={handleRouteLogin}>Log In to Account</Dropdown.Item>
                                <Dropdown.Item className='home-button' onClick={handleRouteSignUp}>Sign Up To Register</Dropdown.Item>
                            </Dropdown>
                        </div>
                    </div>
                    <div className='flex flex-no-wrap overflow-x-auto scrollbar'>
                        {foodTrucks.map((truck) => (
                            <div className='flex flex-col justify-center items-center m-2'>
                                <Image
                                    src={`${truck.image}`}
                                    alt={truck.name}
                                    width={75}
                                    height={75}
                                    className="w-[100px] h-[100px] md:w-[75px] md:h-[75px] object-cover rounded-full"
                                />
                                    <p className='text-sm text-nowrap'>{truck.name}</p>
                            </div>
                        ))}
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
                            <p className='cursor-pointer' onClick={() => { setCurrentRadius('5 Miles') }}>5 Miles</p>
                            <Dropdown.Divider />
                            <p className='cursor-pointer' onClick={() => { setCurrentRadius('10 Miles') }}>10 Miles</p>
                            <Dropdown.Divider />
                            <p className='cursor-pointer' onClick={() => { setCurrentRadius('15 Miles') }}>15 Miles</p>
                            <Dropdown.Divider />
                            <p className='cursor-pointer' onClick={() => { setCurrentRadius('20 Miles') }}>20 Miles</p>
                            <Dropdown.Divider />
                            <p className='cursor-pointer' onClick={() => { setCurrentRadius('25 Miles') }}>25 Miles</p>
                            <Dropdown.Divider />
                            <p className='cursor-pointer' onClick={() => { setCurrentRadius('30 Miles') }}>30 Miles</p>
                            <Dropdown.Divider />
                            <p className='cursor-pointer' onClick={() => { setCurrentRadius('Unlimited') }}>Unlimited</p>
                        </Dropdown>
                    </div>
                </div>
            </div>
<<<<<<< HEAD
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
                            <button>Desserts</button>
                            <button>American</button>
                            <button>Thai</button>
                            <button>Pizza</button>
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
=======
            <div className='map-height container'>
                <MapComponent />
                {/* <img className='w-full' src="https://s3-alpha-sig.figma.com/img/9d3b/753b/d9b6cf7c948fe1cf974a9defbc8833dc?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kzXH3z~GX5AsfGnN8Dm7Htg7PQOngtiGm~8tAJ7GlhqKoqlxwxLoSEoHqL6q7sDh~2vEAB1ONense99XaDHST3yaxdQOZysCSCJHrQVgn~WHs~rUJ9JCjoJz9EqAZDHuKySY1omEmK3nFQo16hx2zi3IPM9CywnYnv2eXmkz385b93AOz-90KDW~zy6eKXDivlRDsC3dxM5Y8NSoCmhDmMY1GXhIc~7mFFMSiRPfe8Sjs8KJFIsgUfM24p1PJprCuAs~yBdwIUTsRhscPhGvPw1M0SF4Vy7h-FNDJqlmNBn7jTEdi5XMY~3Swcld5OTfYMhX7c5B5-T11vs7p2-MCw__" alt="" /> */}
>>>>>>> d21cefec531839f2f30984a6a0050096a2cf6634
            </div>

        </div>
    )
}

export default HomeComponent