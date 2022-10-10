import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BreakingBadService {

  constructor( private _httpClient: HttpClient) { 

  }

  getData(){
    return this._httpClient.get<any>(environment.apiUrl + '/characters');
  }
}
