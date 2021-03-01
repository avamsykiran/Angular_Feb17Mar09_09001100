import { Account } from "./account";

export class Consumer {
    id?:number;
    userId?:string;
    fullName?:string;
    location?:string;
    accounts?:Account[];
}