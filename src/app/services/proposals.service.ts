import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as data from '../../assets/proposals.json';
import { Info } from '../model/proposals.model';

@Injectable({
  providedIn: 'root'
})

export class ProposalsService {
  [x: string]: any;

  private content: Info;

  constructor(private http: HttpClient) { }

  apiURL = '../../assets/proposals.json';

  getContent(url: string){
    return this.http.get(url);
  }
}
console.log(data);