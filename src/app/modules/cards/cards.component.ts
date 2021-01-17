import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app/model/info.model';
import { ProposalsService } from 'src/app/services/proposals.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  records: any= [];
  url = '../../assets/proposals.json';

  constructor(private apiService: ProposalsService) { }

  ngOnInit(): void {
    this.apiService.getContent(this.url)
      .subscribe((data) => this.displayData(data));
  }
  displayData(data: any): any {
    this.records = data;
    console.log(this.records);
  }
}
