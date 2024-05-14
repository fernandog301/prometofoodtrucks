import React, { useContext, useEffect, useState } from 'react';
import { signUpContext } from '@/context/Context';
import { Select } from "flowbite-react";

const AddTruckComponent = () => {
  const { name, setName, description, setDescription, schedule, setSchedule, category, setCategory } = useContext(signUpContext);

  return (
    <div>
      <div>
        <h2 className="text-center my-4">Add Description</h2>
      </div>
      <div className="flex flex-col">
        <p>Truck Name</p>
        <input className=" rounded-lg text-xs w-full my-2" placeholder="Enter a truck name" type="text" onChange={(e) => setName(e.target.value)} />
        <p>Description</p>
        <input className=" rounded-lg text-xs w-full my-2" placeholder="Enter a description" type="text" onChange={(e) => setDescription(e.target.value)} />
        <p>Schedule</p>
        <input className=" rounded-lg text-xs w-full my-2" placeholder="Enter your truck's schedule" type="text" onChange={(e) => setSchedule(e.target.value)} />
        <p>Food Category</p>
        <select className=' rounded-lg text-xs w-full my-2' id="category" onChange={(e => setCategory(e.target.value))} required>
          <option value="" disabled selected>Select a category</option>
          <option value="African">African</option>
          <option value="Algerian">Algerian</option>
          <option value="American">American</option>
          <option value="Arab">Arab</option>
          <option value="Argentinian">Argentinian</option>
          <option value="Asian">Asian</option>
          <option value="Austrian">Austrian</option>
          <option value="Belarusian">Belarusian</option>
          <option value="Bermudian">Bermudian</option>
          <option value="Caribbean">Caribbean</option>
          <option value="Chinese">Chinese</option>
          <option value="French">French</option>
          <option value="Fusion">Fusion</option>
          <option value="German">German</option>
          <option value="Greek">Greek</option>
          <option value="Indian">Indian</option>
          <option value="Italian">Italian</option>
          <option value="Japanese">Japanese</option>
          <option value="Korean">Korean</option>
          <option value="Mexican">Mexican</option>
          <option value="Soul">Soul</option>
          <option value="Spanish">Spanish</option>
          <option value="Thai">Thai</option>
          <option value="Vietnamese">Vietnamese</option>
        </select>
      </div>
    </div>
  )
}

export default AddTruckComponent
