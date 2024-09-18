import { IToken, IUpdateFoodTruck, IUserData, IUserInfo, IUserLogin } from "../../interfaces/interfaces";

const url = 'https://prometowebapi.azurewebsites.net/';

let userData: IUserData;

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
    userData = data;
}

export const loggedinData = () => {
    return userData;
}

export const getMapDots = async () => {
    const res = await fetch(url + 'User/GetAllFoodTrucksAsGeoJSON');
    const data = await res.json();
    return data;
}



// export const getAllFoodTrucks = async () => {
//     const res = await fetch(url + '')
// }

export const updateFoodtruck = async (updateFoodtruck: IUpdateFoodTruck) => {
    const res = await fetch(url + 'FoodTruck/UpdateFoodTruck', {
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

export const getAllFoodTrucks = async () => {
    const res = await fetch(url + 'User/GetAllFoodTrucks/');
    const data = await res.json();
    return data;
}
export const getFoodtrucksByCategory = async (category: string) => {
    const res = await fetch(`${url}User/GetCategoryUser/${category}`);
    const data = await res.json();
    return data;
}