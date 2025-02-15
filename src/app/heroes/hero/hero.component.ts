import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:  string = "ironman";
  public edad:  number = 45;


  get capitalizedName():string{
    return this.name.toUpperCase();
  }


  getHeroDescription():string{
    return `${this.name} - ${this.edad}`;
  }


  changeHero():void{
    this.name = "Sportakus";
  }

  changeAge():void{
    this.edad = 28;
  }


  reset():void{
    this.name = "ironman";
    this.edad = 45
  }

}
