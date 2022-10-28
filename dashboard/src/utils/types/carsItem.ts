import { IUser } from './userItem';
export interface ICarItem {
    theOrder?: string,
    id?: string,
    brand?: string,
    build?: string,
    dayPrice?: string,
    loc?: string,
    mode?: string,
    startDate?: Date,
    endDate?: Date,
    user?: IUser,
    available?: boolean,
    ava?: string,
}
export interface ICarItemCreate {
    theOrder?: string,
    id?: string,
    brand?: string,
    build?: string,
    dayPrice?: string,
    loc?: string,
    mode?: string,
    startDate?: string,
    endDate?: string,
    user?: string , 
    available?: boolean,
    ava?: string,
}