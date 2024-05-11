export interface ITruckPage {
    userID: number
    truckName: string
    date: string
    descripCion: string
    image: string
    categories: string
    isPublished: boolean
    isDeleted: boolean
}

export interface IToken {
    token: string
}

export interface IUpdateFoodTruck{
    address: string,
    city : string,
    state: string,
    zipCode: string,
    name: string,
    image: string,
    schedule: string,
    descripCion: string,
    category: string,
}

export interface IFoodTruck{
    id: number,
    address: string,
    city : string,
    state: string,
    zipCode: string,
    latitude: number,
    longitude: number,
    name: string,
    image: string,
    schedule: string,
    descripCion: string,
    category: string,
    rating: string,
    isDeleted: boolean,
    menuItems: [
    {
      itemId: number[],
      itemName: string[]
      itemPrice: string[]
    }
  ]
}

export interface IUserInfo {
    username: string
    password: string
    name: string
}
export interface IUserLogin {
    username: string
    password: string
}

export interface IUserData {
    userId: number
    name: string
}

export interface IUserSignUp {
    username: string
    password: string
    name: string
    menuItems: {
        itemName: string[]
        itemPrice: number[]
    }
}

export interface IUserSignUpContext {
    username: string
    setUsername: (username: string) => void
    password: string
    setPassword: (password: string) => void
    email: string
    setEmail: (email: string) => void
    name: string
    setName: (name: string) => void
    description: string
    setDescription: (description: string) => void
    category: string
    setCategory: (category: string) => void
    items: string[]
    setItems: (items: string[]) => void
    itemPrices: number[]
    setItemPrices: (itemPrices: number[]) => void
    longitude: number
    setLongitude: (longitude: number) => void
    latitude: number
    setLatitude: (latitude: number) => void
    address: string
    setAddress: (address: string) => void
    city: string
    setCity: (city: string) => void
    state: string
    setState: (state: string) => void
    zipCode: number
    setZipCode: (zipCode: number) => void
    schedule: string
    setSchedule: (schedule: string) => void
    image: string
    setImage: (image: string) => void
    
}