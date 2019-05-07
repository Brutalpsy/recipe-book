import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD5gGCBUzW6TnhmMl-kySetwp-Rx6xrLus',
      authDomain: 'recipe-book-43884.firebaseapp.com',
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        user.getIdToken();
      }


    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
