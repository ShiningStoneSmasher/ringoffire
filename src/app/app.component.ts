import { Component, NgModule, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CommonModule } from "@angular/common";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

  

export class AppComponent {
  firestore: Firestore = inject(Firestore);
//  items$: Observable<any[]>;
  title = 'ringoffire';


  constructor() {
  //  const aCollection = collection(this.firestore, 'items')
  //  this.items$ = collectionData(aCollection);
  }
}
