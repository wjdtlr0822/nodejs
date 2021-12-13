import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Login', url: 'login', icon: 'paper-plane' },
    { title: 'Register', url: 'register', icon: 'heart' },
    { title: 'Qrcode', url: 'qrcode', icon: 'archive' },
    { title: 'Profile', url: 'profile', icon: 'archive' },
  ];
  constructor() {}
}
