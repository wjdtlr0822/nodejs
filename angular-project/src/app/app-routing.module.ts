import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementComponent } from './adminpage/management/management.component';
import { ProductmanageComponent } from './adminpage/productmanage/productmanage.component';
import { ProductregistrationComponent } from './adminpage/productregistration/productregistration.component';
import { AdminpageComponent } from './component/adminpage/adminpage.component';
import { BoardComponent } from './component/board/board.component';
import { BoardreadComponent } from './component/board/boardread/boardread.component';
import { BoardwriteComponent } from './component/board/boardwrite/boardwrite.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ProfileComponent } from './component/profile/profile.component';
import { RegisterComponent } from './component/register/register.component';
import { SeparateCollectionComponent } from './component/separate-collection/separate-collection.component';
import { ShopProductComponent } from './component/shop-product/shop-product.component';
import { ShopComponent } from './component/shop/shop.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { AuthGuard } from './guards/auth.guard';
import { adminGuard } from './guards/adminGuard';
import { QrgenComponent } from './component/qrgen/qrgen.component';
import { QrloginComponent } from './component/qrlogin/qrlogin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'shop', component: ShopComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  {
    path: 'collect',
    component: SeparateCollectionComponent,
    canActivate: [AuthGuard],
  },
  { path: 'admin', component: AdminpageComponent, canActivate: [adminGuard] },
  {
    path: 'management',
    component: ManagementComponent,
    canActivate: [adminGuard],
  },
  {
    path: 'productregister',
    component: ProductregistrationComponent,
    canActivate: [adminGuard],
  },
  {
    path: 'productmanage',
    component: ProductmanageComponent,
    canActivate: [adminGuard],
  },
  {
    path: 'shopproduct',
    component: ShopProductComponent,
    canActivate: [AuthGuard],
  },
  { path: 'board', component: BoardComponent },
  { path: 'boardwrite', component: BoardwriteComponent },
  { path: 'boardread', component: BoardreadComponent },
  { path: 'productlist', component: ProductListComponent },
  { 
    path: 'qrgen', 
    component: QrgenComponent,
    canActivate: [AuthGuard] ,
  },
  { path: 'qrlogin', component: QrloginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
