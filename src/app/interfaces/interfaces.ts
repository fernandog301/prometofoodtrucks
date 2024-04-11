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