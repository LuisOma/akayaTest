import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home/home.page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonicModule, HomePage],
  template: `<ion-app><home-page></home-page></ion-app>`
})
export class AppComponent {}
