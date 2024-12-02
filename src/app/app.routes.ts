import { Routes } from '@angular/router';   
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { DashbordComponent } from './dashbord/dashbord.component';

export const routes: Routes = [
    {path:"",component:AuthComponent},
    {path:"home",component:HomeComponent},
    {path:"dashbord",component:DashbordComponent}
];
