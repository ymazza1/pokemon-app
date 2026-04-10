import { Component, inject, OnInit } from "@angular/core";
import { PokemonDetails, PokemonService } from "../../services/pokemon.service";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { AsyncPipe } from "@angular/common";

@Component({
    selector: "pokemon",
    imports: [AsyncPipe],
    templateUrl: './pokemon.component.html'
})
export class Pokemon implements OnInit{
    private route = inject(ActivatedRoute)
    private pokemonService = inject(PokemonService)
    pokemon! : Observable<PokemonDetails>


    ngOnInit(): void {
        const name = this.route.snapshot.paramMap.get('name')!
        this.load(name)        
    }


    load(name:string){
        this.pokemon = this.pokemonService.getPokemon(name)
    }
    
}