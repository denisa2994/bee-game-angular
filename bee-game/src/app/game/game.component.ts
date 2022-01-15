import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Input() playerName:string = '';
  gameStarted: boolean = false;

  constructor() { 
    
  }

  
  ngOnInit(): void {
  }

  startGame() {
    this.gameStarted = true;
    console.log('Game has started!');
  }

}
