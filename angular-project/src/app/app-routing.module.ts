import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementComponent } from './adminpage/management/management.component';
import { ProductmanageComponent } from './adminpage/productmanage/productmanage.component';
import { ProductregistrationComponent } from './adminpage/productregistration/productregistration.component';
import { AdminpageComponent } from './component/adminpage/adminpage.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ProfileComponent } from './component/profile/profile.component';
import { RegisterComponent } from './component/register/register.component';
import { SeparateCollectionComponent } from './component/separate-collection/separate-collection.component';
import { ShopProductComponent } from './component/shop-product/shop-product.component';
import { ShopComponent } from './component/shop/shop.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuard]},
  {path:'shop',component:ShopComponent,canActivate:[AuthGuard]},
  {path:'register',component:RegisterComponent},
  {path:'collect',component:SeparateCollectionComponent,canActivate:[AuthGuard]},
  {path:'admin',component:AdminpageComponent},
  {path:'management',component:ManagementComponent},
  {path:'productregister',component:ProductregistrationComponent},
  {path:'productmanage',component:ProductmanageComponent},
  {path:'shopproduct',component:ShopProductComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
