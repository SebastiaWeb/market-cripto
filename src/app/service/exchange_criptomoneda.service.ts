import { HttpClient, HttpHeaders } from "@angular/common/http";
import { dashCaseToCamelCase } from "@angular/compiler/src/util";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Criptomoneda } from "../models/criptomoneda";

@Injectable()
export class CriptoService {

    public url: string = "https://api.coingecko.com/api/v3/";
    public coin: string = "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
    public exchange: string = "exchanges";
    public data:any;

    constructor(
        public _http: HttpClient
    ) {

    }

    public getCoins(){

        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this._http.get(this.url+this.coin, {headers: headers})

    }


    public getExchange(): any {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this._http.get(this.url+this.exchange, {headers: headers});
    }
}