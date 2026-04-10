import { Component, inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { PokemonDetails, PokemonService } from "../../services/pokemon.service";
import { AsyncPipe } from "@angular/common";
@Component({
    selector: "trainer-info",
    imports: [AsyncPipe],
    templateUrl: './trainer.component.html',
    styleUrl: './trainer.component.scss'
})

export class Trainer implements OnInit{
    private router = inject(Router)
    private pokemonService = inject(PokemonService)
    pokemonIds : string[] = ["25","18","3",'6','9','57']
    pokemonTeam: Observable<PokemonDetails>[] = []

    ngOnInit(): void {
        this.load()    
    }

    goToPokemonList(){
        this.router.navigate([""]);
    }

    load(){
        this.pokemonIds.forEach(id => {
            this.pokemonTeam = [...this.pokemonTeam, this.pokemonService.getPokemonById(id)]
        })
                
    }
}