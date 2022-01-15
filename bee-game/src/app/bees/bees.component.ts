import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { findIndex } from 'rxjs';
import { Bee } from '../Bee';
import { BeeService } from '../bee.service';

@Component({
  selector: 'app-bees',
  templateUrl: './bees.component.html',
  styleUrls: ['./bees.component.css']
})
export class BeesComponent implements OnInit {

  bees: Bee[] = [];
  totalHP!: number;
  damageInfo: string = '';

  constructor(private beeService: BeeService) {
   }

  ngOnInit(): void {
    this.beeService.addBeeToSwarm(15, 'Drone 9', 50, 9, 12, false);
    this.beeService.getBees().subscribe((bees) => this.bees = bees);
    this.totalHP = this.calculateTotalHP();
  }

  //function that selects a random bee and return the id of that bee
  calculateRandom(): number {
    let random = this.bees[Math.floor(Math.random() * this.bees.length)];
    return random.id;
  }

  //function that calculates the HP of the entire swarm
  calculateTotalHP(): number {
    let totalHP: number = 0;
    for(let bee of this.bees){
      totalHP += bee.hp;
    }

    return totalHP;
  }

  //function that deals damage to random bee
  onHit(): void {
    let randomId = this.calculateRandom();
    this.damageInfo = '';

    for(let bee of this.bees){
      const index = this.bees.findIndex(x => x.id === bee.id);
      if(bee.id === randomId){
        bee.hp -= bee.damage;
        this.damageInfo = 'Dealt ' + bee.damage + ' damage to ' + bee.name;

        //verify if bee is dead
        if(bee.hp < 1){
          bee.isDead = true;
          this.bees.splice( index,1)
          console.log(bee.name + ' is DEAD');
        }

        //When the Queen bee is dead the game is over. No need to check if all the bees are dead
        if(bee.name === "Queen" && bee.hp < 1){
          console.log("GAME OVER!");

        }

        this.totalHP = this.calculateTotalHP();
      }

    }

  }

}
