export interface User{
    id?: number;
    name: string;
    email: string;
    password: string;
    phone: string;
    birthdate: string;
}

export interface Friend{
    id: number;
    name: string;
}

export interface FriendList{
    id?: number;
    firstUser: number;
    secondUser: number;
}
