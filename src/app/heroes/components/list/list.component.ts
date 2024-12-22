import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styles: ``
})
export class ListComponent {
  public heroNames:string[] = ['Thor', 'SpiderBob', 'SuperNoob'];
  public deletedHeroe?:string;

  removeLastHeroe() {
    this.deletedHeroe = this.heroNames.pop();
  }
}
