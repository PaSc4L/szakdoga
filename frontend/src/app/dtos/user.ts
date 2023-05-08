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
    roomId: number;
}

export interface FriendList{
    id?: number;
    firstUser: number;
    secondUser: number;
}

export interface ChatMessage{
    senderId: number;
    recieverId: number;
    roomId: number;
    sender: string;
    reciever: string;
    content: string;
}
