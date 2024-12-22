import { Component, OnInit } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'dbz-main-page',
  standalone: false,
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {

  constructor( private dbzService:DbzService ) {}

  get characters():Character[] {
    return [...this.dbzService.characters];
  }

  addCharacter(item: Character):void {
    this.dbzService.addCharacterServ(item);
  }
  deleteCharacter(itemId: string):void {
    this.dbzService.deleteCharacterServ(itemId);
  }

}
