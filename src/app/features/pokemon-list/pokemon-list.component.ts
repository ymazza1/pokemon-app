import { Component, inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PokemonListData, PokemonService } from "../../services/pokemon.service";
import { Observable } from "rxjs";
import { AsyncPipe } from "@angular/common";

@Component({
    selector: "pokemon-list",
    imports: [AsyncPipe],
    templateUrl: './pokemon-list.component.html',
    styleUrl: './pokemon-list.component.scss'
})

export class PokemonList implements OnInit{
    private pokemonService = inject(PokemonService)
    private router = inject(Router)
    pokemonList! : Observable<PokemonListData>
    private limit : number = 10
    private offset:number = 0;

    ngOnInit(): void {
        this.load()
    }

    load(){
        this.pokemonList = this.pokemonService.getList(this.limit, this.offset )
    }

    addOffset(){
        this.offset+=10;
        this.load()
    }
    substractOffset(){
        this.offset-=10
        this.load()
    }

    goToTrainerPage(){
        this.router.navigate(['/trainer'])
    }

    goToDetails(name: string){
        this.router.navigate(['/pokemon/'+name])
    }
}