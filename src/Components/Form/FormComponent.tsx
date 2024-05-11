"use client";

import { getAllFoodTrucks, updateFoodtruck } from "@/app/utils/DataServices";
import { IFoodTruck, IToken, IUpdateFoodTruck } from "@/interfaces/interfaces";
import {
  AddressAutofill,
  AddressMinimap,
  useConfirmAddress,
  config,
} from "@mapbox/search-js-react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { get } from "http";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";

function FormComponent() {

  const [address, setAddress] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [zipCode,setZipCode] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [schedule, setSchedule] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [image, setImage] = useState<string>('');
  // const [itemId, setItemId] = useState<string>('');
  // const [itemName, setItemName] = useState<string>('');
  // const [itemPrice, setItemPrice] = useState<string>('');
  
  const handleSubmit = async () => {
    let inputData = {
      
      address: address,
      city: city,
      state: state,
      zipCode: zipCode,
      name: name,
      description: description,
      schedule: schedule,
      image: image,
      category:category,
    }

    AddFoodTruck

  }



  // const [showMinimap, setShowMinimap] = useState<boolean>(false);
  // const [feature, setFeature] = useState<null>(null);
  // const [showValidationText, setShowValidationText] = useState<boolean>(false);
  // const [mapToken, setMapToken] = useState<string>("");
  // const [formSuccess, setFormSuccess] = useState(false)
  // const [formSuccessMessage, setFormSuccessMessage] = useState("")
  // const [formData, setFormData] = useState({
  //   address: "",
  //   city: "",
  //   state: "",
  //   zipCode: "",
  //   latitude: "",
  //   longitude: "",
  //   name: "",
  //   description: "",
  //   schedule: "",
  //   image: "",
  //   category:"",
  //   rating:"",
    
  // }); 
  // const [address, setAddress] = useState("");

  

  // const handleInput = (e: any) => {
  //   const fieldName = e.target.name;
  //   const fieldValue = e.target.value;

  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [fieldName]: fieldValue
  //   }));
  // }

  // const submitForm = (e: any) => {
  //   // We don't want the page to refresh
  //   e.preventDefault()

  //   const formURL = e.target.action
  //   const data = new FormData()

  //   // Turn our formData state into data we can use with a form submission
  //   Object.entries(formData).forEach(([key, value]) => {
  //     data.append(key, value);
  //   })

  //   // POST the data to the URL of the form
  //   fetch(formURL, {
  //     method: "PUT",
  //     body: data,
  //     headers: {
  //       'accept': 'application/json',
  //     },
  //   }).then((response) => response.json())
  //   .then((data) => {
  //     setFormData({
  //       address: "",
  //       city: "",
  //       state: "",
  //       zipCode: "",
  //       latitude: "",
  //       longitude: "",
  //       name: "",
  //       description: "",
  //       schedule: "",
  //       image: "",
  //       category:"",
  //       rating:"",
  //     })
  //     setFormSuccess(true)
  //     setFormSuccessMessage(data.submission_text)
  //   })
  // }

  return (
    <div>
      <h1>Contact form</h1>
      {formSuccess ?
        <div>{formSuccessMessage}</div>
        :
        <form method="PUT" action="https://prometowebapi.azurewebsites.net/FoodTruck/UpdateFoodTruck" onSubmit={handleSubmit}>
          <div>
            <label>address</label>
            <input type="address" name="address" onChange={(e) => setAddress(e.target.value)} />
          </div>


          <div>
            <label>city</label>
            <input type="city" name="city" onChange={handleInput} value={formData.city} />
          </div>
          
          <div>
            <label>state</label>
            <input type="state" name="state" onChange={handleInput} value={formData.state} />
          </div>

          <div>
            <label>zipCode</label>
            <input type="zipCode" name="zipCode" onChange={handleInput} value={formData.zipCode} />
          </div>
          <div>
            <label>name</label>
            <input type="name" name="name" onChange={handleInput} value={formData.name} />
          </div>

          <div>
            <label>description</label>
            <textarea name="description" onChange={handleInput} value={formData.description}></textarea>
          </div>

          <div>
            <label>schedule</label>
            <textarea name="schedule" onChange={handleInput} value={formData.schedule}></textarea>
          </div>
          <div>
            <label>latitude</label>
            <textarea name="latitude" onChange={handleInput} value={formData.latitude}></textarea>
          </div>
          <div>
            <label>longitude</label>
            <textarea name="longitude" onChange={handleInput} value={formData.longitude}></textarea>
          </div>
          <div>
            <label>image</label>
            <textarea name="image" onChange={handleInput} value={formData.image}></textarea>
          </div>
          <div>
            <label>category</label>
            <textarea name="category" onChange={handleInput} value={formData.category}></textarea>
          </div>

          <Button type="submit">Send message</Button>
        </form>
      }
    </div>
  )
};

export default FormComponent;

{/*           
    <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email2" value="Your email" />
        </div>
        <TextInput id="email2" type="email" placeholder="name@flowbite.com" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password2" value="Your password" />
        </div>
        <TextInput id="password2" type="password" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="repeat-password" value="Repeat password" />
        </div>
        <TextInput id="repeat-password" type="password" required shadow />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="agree" />
        <Label htmlFor="agree" className="flex">
          I agree with the&nbsp;
          <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
            terms and conditions
          </Link>
        </Label>
      </div>
      <Button type="submit">Register new account</Button>
    </form>
        </div>
      </div>
    </div><div>
      </div> */}