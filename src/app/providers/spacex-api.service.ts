import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Launch } from 'e2e/Models/Launch';

@Injectable({
  providedIn: 'root'
})
export class SpacexApiService {

  private baseUrl = 'https://api.spacexdata.com/v2/';

  constructor(
    private http: HttpClient
  ) {}

  fetchAll(): Observable<Launch[]> {
    return this.http
      .get<Launch[]>(this.baseUrl + 'launches?launch_year=2017&rocket_id=falcon9&core_reuse=true');
  }

}
