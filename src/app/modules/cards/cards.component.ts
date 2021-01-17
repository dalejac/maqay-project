import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app/model/info.model';
import { ProposalsService } from 'src/app/services/proposals.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  records: Content;

  constructor(private apiService: ProposalsService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.apiService.getContent().subscribe((data: Content) => this.records = data);
  } 

}
