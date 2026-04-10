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
export interface PokemonDetails{
    id: string,
    name: string,
    sprites: {
        front_default: string
    },
}

@Injectable({
    providedIn: 'root'
})
export class PokemonService{
    private readonly baseUrl = "https://pokeapi.co/api/v2/"
    private http = inject(HttpClient)

    getList(limit: number, offset: number) : Observable<PokemonListData>{
        return this.http.get<PokemonListData>(this.baseUrl+"/pokemon?limit="+limit+"&offset="+offset)
        .pipe(map(response => response))
    }

    getPokemon(name: string): Observable<PokemonDetails>{
        return this.http.get<PokemonDetails>(this.baseUrl + "/pokemon/" + name).pipe(map(response => response))
    }
}