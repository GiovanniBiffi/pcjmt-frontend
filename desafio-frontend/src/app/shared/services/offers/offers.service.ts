import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Offer } from './offer/offer';


const API = 'https://playground.barato.com.br/desafio-front/api';

@Injectable({providedIn:'root'})
export class OffersService{
    constructor(private http: HttpClient){}
    listaOffers(){
        return this.http
        .get<Offer[]>(API + '/offers');
    }

    getOffer(offerId: string){        
        return this.http
        .get<Offer[]>(API+'/offer/'+offerId);
    }

}