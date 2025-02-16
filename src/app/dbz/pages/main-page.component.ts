import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { isEmpty } from 'rxjs';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent{

    constructor(private dbzService:DbzService){

    }


    get characters():Character[]{
        return [...this.dbzService.characters];
    }

    onDeleteCharacterById(id:string):void{
        this.dbzService.onDeleteCharacterById(id);
    }

    onNewCharacterMainmain(character:Character):void{
        this.dbzService.onNewCharacterMain(character);
    }
}

