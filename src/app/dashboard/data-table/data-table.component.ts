import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Buyer } from 'src/app/models/buyer.model';
import { BuyerDetailsService } from 'src/app/services/buyer-details.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {
  buyersData$: Observable<Buyer[]> = of([]);  
  displayedColumns: string[] = [];

  constructor (private buyerDetailsService: BuyerDetailsService) {}

  ngOnInit(){
    this.getBuyersData();
  }

  getBuyersData(){
    this.buyersData$ = this.buyerDetailsService.getData();
    this.buyersData$.subscribe(data =>
      {
        if (data.length > 0 ) {
          this.displayedColumns = Object.keys(data[0]);
        }
      })
  }


}
