import { Routes } from '@angular/router';
import { HomeComponent } from './Routes/home/home.component';
import { LoginComponent } from './Routes/login/login.component';
import { RegisterComponent } from './Routes/register/register.component';
import { SideNavComponent } from './Components/Home/side-nav/side-nav.component';
import { FeedsComponent } from './Components/Home/feeds/feeds.component';
import { NavbarComponent } from './Components/Home/navbar/navbar.component';

export const routes: Routes = [
{path:"",title:"",pathMatch:"full",component:HomeComponent,children:[
    {path:"",title:"home-feeds",outlet:"home-feeds",component:FeedsComponent},
    {path:"",title:"home-side-nav",outlet:"home-side-nav",component:SideNavComponent},
    {path:"",title:"home-navbar",outlet:"home-navbar",component:NavbarComponent}

    
]},
{path:"register",title:"register",component:RegisterComponent}
,{path:"login",title:"login",component:LoginComponent}
// {path:"",redirectTo:"home",pathMatch:'full'}
];
