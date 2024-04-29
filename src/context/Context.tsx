"use client";

import { IUserSignUpContext } from "@/interfaces/interfaces";
import { createContext, useContext, useState } from "react";

export const signUpContext = createContext<IUserSignUpContext>(
    {} as IUserSignUpContext
);

export const SignUpProvider = ({ children }: { children: React.ReactNode }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [foodTruckName, setFoodTruckName] = useState("");
    const [items, setItems] = useState<string[]>([]);
    const [itemPrices, setItemPrices] = useState<number[]>([]);

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
                items,
                setItems,
                itemPrices,
                setItemPrices,
                aDiv
            }}
        >
            {children}
        </signUpContext.Provider>
    );
};

export const useSignUpContext = () => {
    return useContext(signUpContext);
};
