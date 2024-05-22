"use client";

import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "flowbite-react";
import { useRouter } from "next/navigation";
import router from "next/router";
import {
  getAllFoodTruckItems,
  getAllFoodTrucks,
  getLoggedInUserData,
  getUserDataFromSessionStorage,
  loggedinData,
  setUserDataInSessionStorage,
} from "../utils/DataServices";
import { IFoodTruck, IFoodTruckProperties } from "@/interfaces/interfaces";

const FoodTruckComponent = () => {
  const router = useRouter();

  const handleRouteLogout = () => {
    router.push("/Home");
  };

  const handleEdit = () => {
    router.push("/Form");
  };

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

  const [foodTrucks, setFoodTrucks] = useState<any>();
  const [foodTruck, setFoodTruck] = useState<FoodTruck[]>([]);
  const [UserData, setUserData] = useState<any>("");
  const [username, setUsername] = useState<string>("");
  const [stringArray, setStringArray] = useState("");
  const [userId, setUserId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);
  const [itemPrices, setItemPrices] = useState<number[]>([]);
  const [longitude, setLongitude] = useState<number>(0);
  const [latitude, setLatitude] = useState<number>(0);
  const [address, setAddress] = useState<string | number>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [zipCode, setZipCode] = useState<number>(0);
  const [schedule, setSchedule] = useState<string>("");
  const [image, setImage] = useState<string>("");



  useEffect(() => {
    // const result = stringArray.join(" ");
    const fetchData = async () => {
      const promise:FoodTruck[] = await getAllFoodTrucks();

      setFoodTruck(await promise)
      // setFoodTrucks(resp);

      // const firstFoodTruck = resp;

      // // setAddress(firstFoodTruck.address)
      // // setCategory(firstFoodTruck.category)

      // // setUsername(firstFoodTruck.username)
      // // setDescription(firstFoodTruck.description)
      // // setImage(firstFoodTruck.image)
      // // setItemPrices(firstFoodTruck.itemPrice)

      // const storedUsername = sessionStorage.getItem("username");
      // if (storedUsername === firstFoodTruck.username) {
      //   console.log('is true');
      // } else {
      //   return false
      // }

    }
    fetchData();



  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="container bg-slate-200 h-full p-12">
        {/* {foodTrucks.map((foodTruck) => (
          <key={foodTruck.userID}> */}
        <>
          <div className="flex justify-between items-center">
            <div className="w-32 h-32 overflow-hidden rounded-full flex items-center justify-center">
              <Image
                className=" h-full"
                src="/foodtruck.jpg"
                width={1920}
                height={1080}
                alt="Food Truck Image"
              />
            </div>
            <div>
              {foodTruck.map((items, ) => (
                  <div key={items.Id}>
                    {items.name}
                    <div>
                      <h1>Welcome, {items.name}</h1>
                    </div>
                  </div>
                ))}

            </div>
            <Button
              className="logout-button text-black rounded-xl"
              onClick={handleRouteLogout}
            >
              Log Out
            </Button>
          </div>
          <div>
            <div className="border border-black bg-white rounded-xl mt-8 p-2 h-44 flex flex-col gap-2">
              <div className=" border-b-black border-b">
                {/* {FoodTruckItems.map((item, description ) => ( */}
                <div>
                  <h1>Description {username}</h1>
                </div>
                {/* ) } */}
              </div>
              <div>
                <div>

                  <div>

                  </div>

                </div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  vel placerat eros, nec blandit est. Cras ligula leo, rhoncus
                  volutpat aliquam at, condimentum id diam. Praesent ornare
                  tempor lacus in pellentesque. Sed aliquet venenatis tortor
                  at varius. Vivamus mollis diam a lectus vestibulum, eu
                  scelerisque elit laoreet. Fusce eu sapien id erat
                  pellentesque tempor vel vel leo. Nulla in nisi vitae mi
                  scelerisque molestie. Donec in mi sit amet est sagittis
                  ullamcorper. Fusce dapibus fermentum lectus vitae commodo.
                  Mauris molestie dictum magna, quis convallis turpis
                  consectetur eu.
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mlh w-full mt-4">
            <div className="border border-black w-3/5 bg-white rounded-xl p-4">
              <div className="flex justify-between items-center">
                <h1 className=" text-2xl">Menu</h1>
                <Image
                  className="rounded-full"
                  src="/pen.svg"
                  onClick={handleEdit}
                  alt=""
                  height={36}
                  width={36}
                />
              </div>
              <div></div>
            </div>
            <div className="w-2/5 flex flex-col gap-4">
              <div className="border border-black bg-white rounded-xl h-1/5 p-4">
                <div>
                  <h1></h1>
                  <Image
                    className="rounded-full"
                    src="/user-circle.svg"
                    alt=""
                    height={36}
                    width={36}
                  />
                </div>
                <div></div>
              </div>
              <div className="border border-black bg-white rounded-xl h-1/5 p-4"></div>
              <div className="border border-black bg-white rounded-xl h-3/5 p-4"></div>
            </div>
          </div>
          <div>
            <div className="border border-black bg-white p-4 mt-8 gap-4 rounded-xl">
              <div className="border-b border-black flex gap-4 items-center p-2">
                <div>
                  <Image
                    className="rounded-full"
                    src="/user-circle.svg"
                    alt=""
                    height={36}
                    width={36}
                  />
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nam vel placerat eros, nec blandit est. Cras ligula leo,
                    rhoncus volutpat aliquam at, condimentum id diam. Praesent
                    ornare tempor lacus in pellentesque. Sed aliquet venenatis
                    tortor at varius. Vivamus mollis diam a lectus vestibulum,
                    eu scelerisque elit laoreet.
                  </p>
                </div>
              </div>
              <div className="border-b border-black flex gap-4 items-center p-2">
                <div>
                  <Image
                    className="rounded-full"
                    src="/user-circle.svg"
                    alt=""
                    height={36}
                    width={36}
                  />
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nam vel placerat eros, nec blandit est. Cras ligula leo,
                    rhoncus volutpat aliquam at, condimentum id diam. Praesent
                    ornare tempor lacus in pellentesque. Sed aliquet venenatis
                    tortor at varius. Vivamus mollis diam a lectus vestibulum,
                    eu scelerisque elit laoreet.
                  </p>
                </div>
              </div>
              <div className="border-b border-black flex gap-4 items-center p-2">
                <div>
                  <Image
                    className="rounded-full"
                    src="/user-circle.svg"
                    alt=""
                    height={36}
                    width={36}
                  ></Image>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nam vel placerat eros, nec blandit est. Cras ligula leo,
                    rhoncus volutpat aliquam at, condimentum id diam. Praesent
                    ornare tempor lacus in pellentesque. Sed aliquet venenatis
                    tortor at varius. Vivamus mollis diam a lectus vestibulum,
                    eu scelerisque elit laoreet.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* </> */}
          {/* ))} */}
        </>
      </div>
    </div>
  );
};

export default FoodTruckComponent;
