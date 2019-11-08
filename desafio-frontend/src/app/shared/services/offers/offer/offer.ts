import { Image } from '../../../image/image';

export interface Offer{
    id:number;
    title:string;    
    description:string;
    price:string;
    market_price:string;
    image:Image;
    category:string;
}