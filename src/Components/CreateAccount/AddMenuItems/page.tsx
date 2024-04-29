"use client"

import { Button } from 'flowbite-react';
import React, { useState, useContext } from 'react';
import Image from 'next/image'
import { signUpContext } from '@/context/Context';

const AddMenuItemsComponent = () => {
    const { items, setItems, itemPrices, setItemPrices } = useContext(signUpContext);
    // const [items, setItems] = useState([]);
    // const [itemPrices, setItemPrices] = useState([]);

    const handleAddItem = () => {
        setItems([...items, '']); // Add an empty string to the items array
        console.log(items)
        console.log(itemPrices)
    };

    const handleInputChange = (index, event) => {
        const newItems = [...items];
        newItems[index] = event.target.value;
        setItems(newItems);
    };
    const handlePriceChange = (index, event) => {
        const newPrices = [...itemPrices];
        newPrices[index] = event.target.value;
        setItemPrices(newPrices);
    }
    const handleRemoveItem = (index) => {
        const newItems = [...items];
        const newPrices = [...itemPrices];
        newItems.splice(index, 1);
        newPrices.splice(index, 1);
        setItems(newItems);
        setItemPrices(newPrices);
    };

    const handleNext = () => {
        // Handle the next action
    };

    return (
        <div className='flex justify-center items-center h-full'>
            <div className="px-12 py-12 bg-white rounded-3xl flex flex-col">
                <div>
                    <h1 className=' text-rose-600 text-center text-4xl mt-4'>Prometo Food</h1>
                    <h1 className=' text-rose-600 text-center text-4xl'>Trucks</h1>
                </div>
                <div>
                    <h2 className="text-center my-4">Add Menu Items</h2>
                </div>
                <div id='ItemInputs' className="flex flex-col">
                    {items.map((item, index) => (
                        <div className='flex gap-1' key={index}>
                            <input className="rounded-lg text-xs w-10/12 my-2" placeholder={`Menu Item ${index + 1}`} type="text" value={item} onChange={(e) => handleInputChange(index, e)} />
                            <div className='flex h-customButton rounded-lg my-2 items-center px-2 w-2/12'>
                                <Image src={'/currency-dollar.svg'} alt='' width={12} height={12} className=' h-3'/>
                                <input onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()} className="text-xs w-full outline-none rounded-lg pl-0 focus:ring-transparent focus:border-transparent border-transparent h-full noArrow" type="number" placeholder='' value={itemPrices[index] || ''} onChange={(e) => handlePriceChange(index, e)} />
                            </div>
                            
                            <button className="rounded-lg text-xs w-auto my-2" onClick={() => handleRemoveItem(index)}>
                                <Image src={'/minus-circle-fill.svg'} alt='' width={32} height={32} />
                            </button>
                        </div>
                    ))}
                </div>
                <div>
                    <button className="rounded-lg text-xs w-full my-2 h-customButton" onClick={handleAddItem}>+</button>
                </div>
                <div>
                    <Button className="w-full bg-btn font-light my-4" onClick={handleNext} >Next</Button>
                </div>
            </div>
        </div>
    );
};

export default AddMenuItemsComponent;
