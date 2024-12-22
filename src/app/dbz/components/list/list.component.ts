import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dzb-list',
  standalone: false,
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Input()
  public characterList:Character[] = [];

  @Output()
  emitOnDelete:EventEmitter<string> = new EventEmitter();

  onDeleteItem(characterId?:string):void {
    this.emitOnDelete.emit(characterId);
  }
}
