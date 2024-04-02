import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/game';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  pickCardAnimation = false;
  currentCard: string = '';
  game?: Game;
  
  constructor() {}

  ngOnInit(): void {
    this.newGame();
  }

  newGame(){
    this.game = new Game();
    console.log(this.game);
  }

  takeCard(){
    if(!this.pickCardAnimation){
      const card = this.game?.stack.pop();
      if (typeof card === 'string') {
          this.currentCard = card;
          console.log(this.currentCard);
          this.pickCardAnimation = true;
          setTimeout(() => {
              this.game?.playedCards.push(this.currentCard);
              this.pickCardAnimation = false;
          }, 1000);
      } else {
          console.log('Keine Karte verfügbar');
      }
  }
}
}
