"use client"

import { Dropdown, DropdownItem } from 'flowbite-react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import MapComponent from '@/Components/Map/MapComponent';
import { IUserData } from '@/interfaces/interfaces';
import Image from 'next/image'
import { getAllFoodTrucks } from '../utils/DataServices';

const HomeComponent = () => {
    const [currentRadius, setCurrentRadius] = useState('5 Miles');
    const [foodTrucks, setFoodTrucks] = useState<FoodTruck[]>([]);
    const [cateogry, setCategory] = useState<string>("Categories");

    interface FoodTruck {
        Id: number;
        userName: string;
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
        salt: string
        hash: string
    }

    const router = useRouter();

    const handleRouteLogin = () => {
        router.push('/Login')
    }

    const handleRouteSignUp = () => {
        router.push('/SignUp')
    }

    function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
        const R = 6371;
        const dLat = (lat2 - lat1) * (Math.PI / 180);
        const dLon = (lon2 - lon1) * (Math.PI / 180);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c;
        return distance;
    }
    useEffect(() => {
        const fetchFoodTrucks = async () => {
            const myRes = await fetch('https://api.geoapify.com/v1/ipinfo?apiKey=5affdbac674e47b0977a8f4bba6b9ea2');
            const myData = await myRes.json();
            const myLatitude =  await myData.location.latitude;
            const myLongitude = await myData.location.longitude;
            const data:FoodTruck[] = await getAllFoodTrucks();
            const sortedFoodTrucks = data.slice().sort((a, b) => {
                const distanceA = calculateDistance(a.latitude, a.longitude, myLatitude, myLongitude);
                const distanceB = calculateDistance(b.latitude, b.longitude, myLatitude, myLongitude);
                return distanceA - distanceB;
            });
            setFoodTrucks(sortedFoodTrucks);
        };

        fetchFoodTrucks();

        const test = async() => {
            const promise:FoodTruck[] = await getAllFoodTrucks();
            console.log(promise);
        }
        test();

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
                            <div key={truck.Id} className='flex flex-col justify-center items-center m-2'>
                                {/* <Image
                                    src={`${truck.image}`}
                                    alt={truck.name}
                                    width={75}
                                    height={75}
                                    className="w-[100px] h-[100px] md:w-[75px] md:h-[75px] object-cover rounded-full"
                                /> */}
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
                            <button onClick={() => console.log(foodTrucks)} className='home-button px-2 py-1'>Custom</button>
                        </Dropdown>
                    </div>
                    <div className='home-button p-2 rounded-md'>
                        <Dropdown className='home-button ml-16' label={`${cateogry}`} inline >
                            <div className='grid grid-cols-2 gap-x-4 gap-y-1 px-3 py-2'>
                                <button onClick={() => setCategory("Catgories")}>Any</button>
                                <button onClick={() => setCategory("African")}>African</button>
                                <button onClick={() => setCategory("Algerian")}>Algerian</button>
                                <button onClick={() => setCategory("American")}>American</button>
                                <button onClick={() => setCategory("Arab")}>Arab</button>
                                <button onClick={() => setCategory("Argentinian")}>Argentinian</button>
                                <button onClick={() => setCategory("Asian")}>Asian</button>
                                <button onClick={() => setCategory("Austrian")}>Austrian</button>
                                <button onClick={() => setCategory("Belarusian")}>Belarusian</button>
                                <button onClick={() => setCategory("Bermudian")}>Bermudian</button>
                                <button onClick={() => setCategory("Caribbean")}>Caribbean</button>
                                <button onClick={() => setCategory("Chinese")}>Chinese</button>
                                <button onClick={() => setCategory("French")}>French</button>
                                <button onClick={() => setCategory("Fusion")}>Fusion</button>
                                <button onClick={() => setCategory("German")}>German</button>
                                <button onClick={() => setCategory("Greek")}>Greek</button>
                                <button onClick={() => setCategory("Indian")}>Indian</button>
                                <button onClick={() => setCategory("Italian")}>Italian</button>
                                <button onClick={() => setCategory("Japanese")}>Japanese</button>
                                <button onClick={() => setCategory("Korean")}>Korean</button>
                                <button onClick={() => setCategory("Mexican")}>Mexican</button>
                                <button onClick={() => setCategory("Soul")}>Soul</button>
                                <button onClick={() => setCategory("Spanish")}>Spanish</button>
                                <button onClick={() => setCategory("Thai")}>Thai</button>
                                <button onClick={() => setCategory("Vietnamese")}>Vietnamese</button>
                                <button onClick={() => setCategory("Other")}>Other</button>
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
            <div className='map-height container'>
                <MapComponent />
                {/* <img className='w-full' src="https://s3-alpha-sig.figma.com/img/9d3b/753b/d9b6cf7c948fe1cf974a9defbc8833dc?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kzXH3z~GX5AsfGnN8Dm7Htg7PQOngtiGm~8tAJ7GlhqKoqlxwxLoSEoHqL6q7sDh~2vEAB1ONense99XaDHST3yaxdQOZysCSCJHrQVgn~WHs~rUJ9JCjoJz9EqAZDHuKySY1omEmK3nFQo16hx2zi3IPM9CywnYnv2eXmkz385b93AOz-90KDW~zy6eKXDivlRDsC3dxM5Y8NSoCmhDmMY1GXhIc~7mFFMSiRPfe8Sjs8KJFIsgUfM24p1PJprCuAs~yBdwIUTsRhscPhGvPw1M0SF4Vy7h-FNDJqlmNBn7jTEdi5XMY~3Swcld5OTfYMhX7c5B5-T11vs7p2-MCw__" alt="" /> */}
            </div>

        </div>
    )
}

export default HomeComponent