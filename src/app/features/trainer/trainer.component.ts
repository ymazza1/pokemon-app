import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "trainer-info",
    templateUrl: './trainer.component.html',
    styleUrl: './trainer.component.scss'
})

export class Trainer{
    private router = inject(Router)

    goToPokemonList(){
        this.router.navigate([""]);
    }
}