import { IToken, IUserData, IUserInfo, IUserLogin } from "../interfaces/interfaces";

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