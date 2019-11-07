import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Offers } from './offers';


const API = 'https://playground.barato.com.br/desafio-front/api';

@Injectable()
export class OffersService{
    constructor(private http: HttpClient){}
    listaOffers(){
        return this.http
        .get<Offers[]>(API + '/offers');
    }
}