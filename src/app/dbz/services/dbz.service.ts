
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters:Character[] = [
    {id: uuid(), name: 'Goku', power: 3000},
    {id: uuid(), name: 'Krillin', power: 2000},
    {id: uuid(), name: 'Pepin', power: 5000},
    {id: uuid(), name: 'Tato', power: 10},
  ]

  addCharacterServ(item:Character):void {
    const newCharacter = { id: uuid(), ...item };
    this.characters.push(newCharacter);
  }

  deleteCharacterServ(itemId:string):void {
    // this.characters.splice(nroItem, 1);
    if( !itemId ) console.error("deleteCharacter: El item a eliminar no existe o no posee id");
    this.characters = this.characters.filter( character => character.id !== itemId );
  }

}
