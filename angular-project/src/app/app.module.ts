import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { ProfileComponent } from './component/profile/profile.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ShopComponent } from './component/shop/shop.component';
import { FormsModule } from '@angular/forms';
import { ValidateService } from './services/validate.service';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import {HttpClientModule} from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { SeparateCollectionComponent } from './component/separate-collection/separate-collection.component';
import { AdminpageComponent } from './component/adminpage/adminpage.component';
import { ManagementComponent } from './adminpage/management/management.component';
import { ProductregistrationComponent } from './adminpage/productregistration/productregistration.component';
import { ReaddataService } from './services/readdata.service';
import { JwtModule } from '@auth0/angular-jwt';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductmanageComponent } from './adminpage/productmanage/productmanage.component';
import { ShopProductComponent } from './component/shop-product/shop-product.component';
import { AuthGuard } from './guards/auth.guard';
import { DeleteService } from './services/delete.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    ShopComponent,
    SeparateCollectionComponent,
    AdminpageComponent,
    ManagementComponent,
    ProductregistrationComponent,
    ProductmanageComponent,
    ShopProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlashMessagesModule,
    HttpClientModule,
    JwtModule.forRoot({
      config:{
        tokenGetter:()=>{
          return localStorage.getItem('authToken')
        }
      }
    }),
    ReactiveFormsModule
  ],
  providers: [
    ValidateService,
    FlashMessagesService,
    AuthService,
    ReaddataService,
    AuthGuard,
    DeleteService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
