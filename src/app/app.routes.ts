import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainboardComponent } from './mainboard/mainboard.component';


export const routes: Routes = [
    {path: '', component : LoginComponent},
    {path: 'GuestLogin', component : MainboardComponent},

];
