import { Injectable } from '@angular/core';
//import { BEES } from './mock-bees';
import { Bee } from './Bee';
import { Observable, of } from 'rxjs';
import { BeesComponent } from './bees/bees.component';

@Injectable({
  providedIn: 'root'
})
export class BeeService {

  beeArr: Bee[] = [];
  constructor() { }

  addBeeToSwarm(id: number, name: string, hp: number, quantity: number, damage: number, isDead: boolean) {
    const bee: Bee = new Bee(id, name, hp, quantity, damage, isDead);
    this.beeArr.push(bee);
  }

  getBees() {
    return this.beeArr;
  }
}
