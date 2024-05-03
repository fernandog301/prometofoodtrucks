"use client";

import { IUserSignUpContext } from "@/interfaces/interfaces";
import { createContext, useContext, useState } from "react";

export const signUpContext = createContext<IUserSignUpContext>(
    {} as IUserSignUpContext
);

export const SignUpProvider = ({ children }: { children: React.ReactNode }) => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [foodTruckName, setFoodTruckName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [items, setItems] = useState<string[]>([]);
    const [itemPrices, setItemPrices] = useState<number[]>([]);
    const [longitude, setLongitude] = useState<number>(0);
    const [latitude, setLatitude] = useState<number>(0);
    const [address, setAddress] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [state, setState] = useState<string>("");
    const [zipcode, setZipcode] = useState<number>(0);

    return (
        <signUpContext.Provider
            value={{
                username,
                setUsername,
                password,
                setPassword,
                email,
                setEmail,
                foodTruckName,
                setFoodTruckName,
                description,
                setDescription,
                items,
                setItems,
                itemPrices,
                setItemPrices,
                longitude,
                setLongitude,
                latitude,
                setLatitude,
                address,
                setAddress,
                city,
                setCity,
                state,
                setState,
                zipcode,
                setZipcode
            }}
        >
            {children}
        </signUpContext.Provider>
    );
};

export const useSignUpContext = () => {
    return useContext(signUpContext);
};
