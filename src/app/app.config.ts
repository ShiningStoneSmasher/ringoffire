import {
  ApplicationConfig,
  NgModule,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'ring-of-fire-db32c',
          appId: '1:858698310144:web:004d167747080a0a93aee5',
          storageBucket: 'ring-of-fire-db32c.appspot.com',
          apiKey: 'AIzaSyDo1oFOMUZZSup3Sy3IPxAU2AudMNTNYcs',
          authDomain: 'ring-of-fire-db32c.firebaseapp.com',
          messagingSenderId: '858698310144',
        })
      )
    ),
    importProvidersFrom(provideFirestore(() => getFirestore())),
  ],
};
