import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    provideFirebaseApp(() => initializeApp({"projectId":"join-angular-ace95","appId":"1:396788050117:web:42299f6e3c446d3a1f28ac","storageBucket":"join-angular-ace95.appspot.com","apiKey":"AIzaSyBYwB_OJj5HGzfjJKbCVPPCh9FvlqTXJWA","authDomain":"join-angular-ace95.firebaseapp.com","messagingSenderId":"396788050117"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())]
};
