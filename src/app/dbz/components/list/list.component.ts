import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Output()
  public onDelete:EventEmitter<string>= new EventEmitter();



  @Input()
  public characterList:Character[]=[  ];



  
  onDeleteCharacter(index:string):void{
    // TODO: Emitir el ID del personaje
    this.onDelete.emit(index);
    
     
  }
}
