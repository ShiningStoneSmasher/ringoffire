import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  pickCardAnimation = false;
  
  constructor() { }

  ngOnInit() {
  }

  takeCard(){
    this.pickCardAnimation = true;
  }
}
