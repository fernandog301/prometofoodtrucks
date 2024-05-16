"use client";

import { signUpContext } from "@/context/Context";
import { IUpdateFoodTruck } from "@/interfaces/interfaces";
import {
  Button,
  Checkbox,
  Dropdown,
  FileInput,
  Label,
  Modal,
  TextInput,
} from "flowbite-react";
import React, { useState } from "react";

const FoodTruckEditComponent = () => {
    const [openModal, setOpenModal] = useState(true);
    const [FoodTruckItems, setFoodTruckItems] = useState<IUpdateFoodTruck[]>()


    const [FoodTruck , setFoodTruck] = useState<string>("");
    const [Description , setDescription] = useState<string>("");
    const [category , setCategory] = useState<string>("");
    const [schedule , setSchedule] = useState<string>("");
    const [Image , setImage] = useState<any>("");

    const [editBool, setEditBool] = useState<boolean>(true);


    const handleShow = () => {
        setOpenModal(true);
        setEditBool(false)
        setCategory("");
        setFoodTruck("");
        setDescription("");
        setSchedule("");
        setImage("");
    }

    const handleFoodTruck = (e: React.ChangeEvent<HTMLInputElement>) => setFoodTruck(e.target.value);
    const handleDescription = (e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value);
    const handleCategory = (e: React.ChangeEvent<HTMLInputElement>) => setCategory(e.target.value);
    const handleSchedule = (e: React.ChangeEvent<HTMLInputElement>) => setSchedule(e.target.value);

    const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        let reader = new FileReader();
        const file = e.target.files?.[0]
        if(file){
            reader.onload = () => {
                console.log(reader)
                setImage(reader.result);
            }
            reader.readAsDataURL(file);
        }
    }

    const handleSave = () => {
      
        setOpenModal(false);

    }

    const handleEdit = () => {
        setOpenModal(true);
        setEditBool(true);
    }

    const handleDelete = () => {

    }

  return (
    <div className="flex min-h-screen flex-col p-24">
      <div className="flex flex-col items-center mb-10">
        <Button onClick={handleShow}>Add Food Truck</Button>
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>{editBool ? 'Edit': 'Add'}Food Truck items</Modal.Header>
          <Modal.Body>
            <form className="flex max-w-md flex-col gap-4">
              <div>
                
                <div className="mb-2 block">
                  <Label  htmlFor="Food Truck" value="Food Truck" />
                </div>
                <TextInput onChange={handleFoodTruck}
                  id="FoodTruck"
                  type="Text"
                  placeholder="Enter Food Truck Name"
                  required
                />
              </div>
              <div>
                  <div className="mb-2 block">
                    <Label htmlFor="Image" value="Image" />
                  </div>
                  <FileInput onChange={handleImage} accept="image/png, image/jpg" id="Image" placeholder="Choose Image" required />
                </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="Description" value="Description" />
                </div>
                <TextInput onChange={handleDescription}
                  id="Description"
                  type="Text"
                  placeholder="Enter Description"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="category" value="category" />
                </div>
                <TextInput onChange={handleCategory}
                  id="category"
                  type="Text"
                  placeholder="Enter category"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="schedule" value="schedule" />
                </div>
                <TextInput  onChange={handleSchedule}
                  id="schedule"
                  type="Text"
                  placeholder="Enter schedule"
                  required
                />
              </div>

              <div className="flex items-center gap-2">
                <Dropdown label="Dropdown button" dismissOnClick={true}>
                  <Dropdown.Item onChange={() => setCategory("Chinese")}>Chinese</Dropdown.Item>
                  <Dropdown.Item onChange={() => setCategory("Mexican")}>Mexican</Dropdown.Item>
                  <Dropdown.Item onChange={() => setCategory("Indian")}>Indian</Dropdown.Item>
                  <Dropdown.Item onChange={() => setCategory("Seafood")}>Seafood</Dropdown.Item>
                  <Dropdown.Item onChange={() => setCategory("Desserts")}>Desserts</Dropdown.Item>
                  <Dropdown.Item onChange={() => setCategory("American")}>American</Dropdown.Item>
                  <Dropdown.Item onChange={() => setCategory("Thai")}>Thai</Dropdown.Item>
                  <Dropdown.Item onChange={() => setCategory("Pizza")}>Pizza</Dropdown.Item>
                </Dropdown>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleSave}>Save and Enter</Button>
            <Button color="gray" onClick={handleSave}>
              Save
            </Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default FoodTruckEditComponent;
