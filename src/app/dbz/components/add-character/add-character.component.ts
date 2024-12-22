import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  standalone: false,
  templateUrl: './add-character.component.html',
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter:EventEmitter<Character> = new EventEmitter;


  public character:Character = {
    name: 'Pipo',
    power: 3000
  }

  emitharacter():void{
    console.log(this.character);
    if( this.character.name.length === 0 ) return;
    this.onNewCharacter.emit({...this.character});

    this.character.name = '';
    this.character.power = 0;
  };
}
