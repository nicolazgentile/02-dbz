import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  public name:string = "Ironman";
  public age:number = 43;

  get capitalizedName():string {
    return this.name.toLocaleUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(name:string):void {
    this.name = name;
  }

  changeAge(age:number):void {
    this.age = age;
  }

  resetForm():void {
    this.name = "Ironman";
    this.age = 43;
    document.querySelectorAll('h1').forEach( element => {
      element.innerHTML = '<h2>Reseteado desde ts</h2>';
    });
  }
}
