import { Component, OnInit } from '@angular/core';
import { Content } from '../../model/info.model';
import { ProposalsService } from '../../services/proposals.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  records: Content;

  constructor(private apiService: ProposalsService) { }

  ngOnInit(): void {
  }

 
}
