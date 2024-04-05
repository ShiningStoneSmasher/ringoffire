import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import { AppComponent } from '../app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, AppComponent, MatButtonModule, MatIconModule, MatDividerModule],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  pickCardAnimation = false;
  currentCard: string = '';
  game?: Game;

  
  constructor(public dialog: MatDialog) {}

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
openDialog(): void {
  const dialogRef = this.dialog.open(DialogAddPlayerComponent);

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
}
}
