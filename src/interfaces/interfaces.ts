export interface ITruckPage {
    userID: number
    truckName: string
    date: string
    description: string
    image: string
    categories: string
    isPublished: boolean
    isDeleted: boolean
}

export interface IToken {
    token: string
}

export interface IUserInfo {
    username: string
    password: string
    foodTruckName: string
}
export interface IUserLogin {
    username: string
    password: string
}

export interface IUserData {
    userId: number
    foodTruckName: string
}

export interface IUserSignUp {
    username: string
    password: string
    foodTruckName: string
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
    foodTruckName: string
    setFoodTruckName: (foodTruckName: string) => void
    items: string[]
    setItems: (items: string[]) => void
    itemPrices: number[]
    setItemPrices: (itemPrices: number[]) => void
    aDiv: any
}