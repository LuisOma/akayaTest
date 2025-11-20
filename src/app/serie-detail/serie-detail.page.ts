import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-serie-detail',
  standalone: true,
  imports: [IonicModule, RouterModule],
  templateUrl: './serie-detail.page.html',
  styleUrls: ['./serie-detail.page.scss'],
})
export class SerieDetailPage {
  serie = { title: 'Mi Serie', description: 'Descripción de la serie' };
}
