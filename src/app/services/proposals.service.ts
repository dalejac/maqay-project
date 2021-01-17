import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as data from '../../assets/proposals.json';
import { Info } from '../model/proposals.model';

@Injectable({
  providedIn: 'root'
})

export class ProposalsService {

  private content: Info;

  constructor(private httpClient: HttpClient) { }

  apiURL = '../../assets/proposals.json';

  getContent(): Observable<Info>{
    return this.httpClient.get<Info>(`${this.apiURL}`);
  } 
}
console.log(data);
