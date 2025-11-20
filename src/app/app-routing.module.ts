import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { SerieDetailPage } from './serie-detail/serie-detail.page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'serie/:id', component: SerieDetailPage }, 
];

