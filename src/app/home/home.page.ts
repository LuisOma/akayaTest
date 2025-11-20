import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { SeriesService, Serie } from '../services/series.service';


@Component({
  selector: 'home-page', 
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  series: Serie[] = [];
  page = 1;
  hasMore = true;

  constructor(private seriesService: SeriesService) {
    this.loadSeries();
  }

  loadSeries(event?: any) {
    if (!this.hasMore) return;

    this.seriesService.getSeries(this.page).subscribe(res => {
      this.series.push(...res.series);
      this.hasMore = res.hasMore;
      this.page++;

      if (event) event.target.complete();
    });
  }
}
