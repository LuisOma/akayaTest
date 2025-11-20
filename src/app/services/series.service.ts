import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Serie {
  id: number;
  name: string;
  status: string;
  image: string;
  total_chapters: number;
}

interface SeriesResponse {
  status: number;
  message: string;
  items: Serie[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    hasMore: boolean;
    totalPages: number;
  };
}

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private apiUrl = 'https://api-dev.akayamedia.com/get/series';

  constructor(private http: HttpClient) {}

  getSeries(page: number = 1, limit: number = 10): Observable<{series: Serie[], hasMore: boolean}> {
    return this.http.post<SeriesResponse>(this.apiUrl, { page, limit }).pipe(
      map(res => ({
        series: res.items.filter(s => s.status === 'Published'),
        hasMore: res.pagination.hasMore
      }))
    );
  }
}
