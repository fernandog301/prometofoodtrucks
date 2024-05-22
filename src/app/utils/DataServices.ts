import { IFoodTruck, IFoodTruckProperties, IToken, IUpdateFoodTruck, IUserData, IUserInfo, IUserLogin } from "../../interfaces/interfaces";

const url = 'https://prometowebapi.azurewebsites.net/';

let userData: IUserData;
// let userData = [];



export const createAccount = async (createdUser: IUserInfo) => {
    const response = await fetch(url + 'User/AddUser', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(createdUser)
    });

    if(!response.ok) {
        const message = "An error has occured " + response.status;
        throw new Error(message);
    }

    const data = await response.json();
    console.log(data);
    return data
}

export const login = async (Loginuser: IUserLogin) => {
    const response = await fetch(url + 'User/Login', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(Loginuser)
    });

    if(!response.ok) {
        const message = "An error has occured " + response.status;
        throw new Error(message);
    }

    const data: IToken = await response.json();
    return data;

}

export const checkToken = () => {
    let result = false;

    let lsData = localStorage.getItem("Token");

    if(lsData != null) {
        result = true;
    }
    return result;
}

export const getLoggedInUserData = async (username: string) => {
    const res = await fetch(url + "User/GetUserByUsername/" + username);
    const data = await res.json();
    // userData = data;
    return data;
}

export const loggedinData = () => {
    return userData;
}

export const getMapDots = async () => {
    const res = await fetch(url + 'User/GetAllFoodTrucksAsGeoJSON');

    const data = await res.json();
    return data;
}

export const setUserDataInSessionStorage = (userData: IUserData) => {
    const jsonData = JSON.stringify(userData);
    sessionStorage.setItem("userData", jsonData);
    
};

// Function to get user data from session storage
export const getUserDataFromSessionStorage = () => {
    const savedUserData = sessionStorage.getItem("userData");
    return savedUserData ? JSON.parse(savedUserData) : null;
};

// export const getAllFoodTrucks = async () => {
//     const res = await fetch(url + '')
// }

// FoodTruck Starting point
//  FoodTruck : IFoodTruck+ FoodTruck
export const getAllFoodTrucks = async () => {
    const res = await fetch(url + 'User/GetAllFoodTrucks/');

    const data = await res.json();
    return data;
}





export const getAllFoodTruckItems = async (FoodTruck : IFoodTruck) => {
    const res = await fetch(url + 'FoodTruck/GetAllFoodTrucks/' + FoodTruck);
    const data = await res.json();
    return data;
}


export const updateFoodTruck = async (updateFoodtruck: IFoodTruck) => {
    const res = await fetch(url + 'FoodTruck/UpdateFoodTruckForUser', {
        method: 'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(updateFoodtruck)
    });

    if(!res.ok){
        const message = "An error has occured " + res.status;
        throw new Error(message);
    }
    
    const data: IToken = await res.json();
    return data;
}





export const AddFoodTruck = async (AddFoodTruck: IFoodTruck) => {
    const response = await fetch(url + 'FoodTruck/AddFoodTruckItems', {
    method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(AddFoodTruck)
        });
        if(!response.ok) {
            const message = "An error has occured " + response.status;
            throw new Error(message);
        }
        const data = await response.json();
        console.log(data);
        return data;
}








// foodTruck ending endpoints


// Menu Starts

export const updateMenuItem = async (updateMenuItem: IFoodTruck) => {
    const res = await fetch(url + 'FoodTruck/UpdateMenuItem', {
        method: 'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(updateMenuItem)
    });

    if(!res.ok){
        const message = "An error has occured " + res.status;
        throw new Error(message);
    }
    
    const data: IToken = await res.json();
    return data;
}
