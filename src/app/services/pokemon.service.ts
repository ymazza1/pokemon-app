import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";

export interface PokemonData{
    name: string,
    url: string
}

export interface PokemonListData{
    count: number,
    results: PokemonData[]
}

@Injectable({
    providedIn: 'root'
})
export class PokemonService{
    private readonly baseUrl = "https://pokeapi.co/api/v2/"
    private http = inject(HttpClient)

    getList() : Observable<PokemonListData>{
        return this.http.get<PokemonListData>(this.baseUrl+"/pokemon").pipe(map(response => response))
    }
}