"use client";

import React, { useEffect, useState } from 'react';
import { Button, Card } from "flowbite-react";
import { useRouter } from 'next/navigation';
import { createAccount } from '../utils/DataServices';
import AddMenuItemsComponent from '@/Components/CreateAccount/AddMenuItemsComponent';
import AddTruckComponent from '@/Components/CreateAccount/AddTruckComponent';
import AddLoginInfoComponent from '@/Components/CreateAccount/AddLoginInfoComponent';
import AddAvatarComponent from '@/Components/CreateAccount/AddAvatarComponent';
import { useSignUpContext } from '@/context/Context';
import AddLocationComponent from '@/Components/CreateAccount/AddLocationComponent';
import DynamicMapPageComponent from '@/Components/CreateAccount/DynamicMapComponent';

const SignUpComponent = () => {
  const [i, setI] = useState(0);
  const [itemName, setItemName] = useState<string>("");
  const [itemPrice, setItemPrice] = useState<string>("");

  const { username, setUsername, password, setPassword, email, setEmail, name, setName, description, setDescription, category, setCategory, rating, setRating, items, setItems, itemPrices, setItemPrices, longitude, setLongitude, latitude, setLatitude, address, setAddress, city, setCity, state, setState, zipCode, setZipCode, schedule, setSchedule, image, setImage } = useSignUpContext();
  let router = useRouter();
  const components = [<AddLoginInfoComponent key="loginInfo" />, <AddTruckComponent key="truck" />, <AddMenuItemsComponent key="menuItems" />, <AddAvatarComponent key="avatar" />, <DynamicMapPageComponent key="location" />]
  const isCompleted = i === components.length - 1
  const isStarting = i === 0

  useEffect(() => {
    setItemName(items.join(" "))
    setItemPrice(itemPrices.join(" "))
  },[username, items, itemPrices])


  const validateStep = () => {
    switch(i) {
      case 0:
        return username.length > 0 && password.length > 0 && email.length > 0;
      case 1:
        return name.length > 0 && description.length > 0 && category.length > 0 && schedule.length > 0;
      case 2:
        return items.length > 0 && itemPrices.length > 0;
      case 3:
        return image.length > 0;
      case 4: 
      default:
        return false;
    }
  };
  const handleNext = () => {
    if (validateStep()) {
      setI(i + 1);
    } else if(components[4]) {
      let userData = {
        userName: username,
        password: password,
        address: address,
        city: city,
        state: state,
        zipCode: zipCode,
        latitude: latitude,
        longitude: longitude,
        name: name,
        image: image,
        schedule: schedule,
        description: description,
        category: category,
        rating: rating,
        isDeleted: false,
        itemName: itemName,
        itemPrice: itemPrice
      }
      console.log(userData);
      createAccount(userData)
      router.push("/Login");
    } else {
      alert("Please fill in all required fields.");
    }
  };
  const handleBack = () => {
    if (i > 0) {
      setI(i - 1)
    } else {
      router.push("/")
    }
  }


  return (
    <div className='flex justify-center items-center h-full'>
      <div className="px-12 py-12 bg-white rounded-3xl flex flex-col">
        <div>
          <h1 className=' text-rose-600 text-center text-4xl mt-4'>Prometo Food</h1>
          <h1 className=' text-rose-600 text-center text-4xl'>Trucks</h1>
        </div>
        <div>
          {components[i]}

        </div>
        <div className='flex gap-4'>
          <Button className="w-full bg-btn font-light my-4" onClick={handleBack}>{isStarting ? "Home" : "Back"}</Button>
          <Button className="w-full bg-btn font-light my-4" onClick={handleNext}>{isCompleted ? "Sign Up" : "Next"}</Button>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default SignUpComponent