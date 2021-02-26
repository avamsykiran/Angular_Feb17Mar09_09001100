import { Account } from "./account";

export class Consumer {
    consumerId?:number;
    userId?:string;
    fullName?:string;
    location?:string;
    accounts?:Account[];
}