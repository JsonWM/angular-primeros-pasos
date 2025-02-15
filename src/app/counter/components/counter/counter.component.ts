import { Component } from "@angular/core";




@Component({
    selector:'app-counter',
    template:`  
    <h4>Un numero: {{aNumber}}</h4>


<p>raaaaaaaaa</p>

<hr>

<button (click)="decreaseBy()" >-1</button>
<button (click)="reset()">Reset</button>
<button (click)="increaseBy(2)">+1</button>
    
  
    
    `
})
export class CounterComponent{

    public aNumber:number = 10;


  increaseBy(value:number):void{
    this.aNumber+=value;

  }

  decreaseBy():void{
    this.aNumber-=1;
  }

  reset():void{
    this.aNumber =10;
  }

}