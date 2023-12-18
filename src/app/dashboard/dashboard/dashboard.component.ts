import { ChangeDetectorRef, Component } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { MotorTypeData, PopularCitiesData } from 'src/app/models/buyer.model';
import { ChartInput, PieChartInput } from 'src/app/models/charts.model';
import { BuyerDetailsService } from 'src/app/services/buyer-details.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public motorPieChartData: PieChartInput = { labels: [], series: [] };
  public popularCitiesChartData: ChartInput = { labels: [], seriesData: [] };
  public mtorTypeByGenderData: ChartInput = { labels: [], seriesData: [] };
  constructor(private buyerDetailsService: BuyerDetailsService, private cdr: ChangeDetectorRef) {

  }
  ngOnInit(): void {

    forkJoin({
      motorTypeData: this.buyerDetailsService.getMotorTypeData(),
      popularCities: this.buyerDetailsService.getPopularCities(),
      mtorTypeByGender: this.buyerDetailsService.getMotorTypeByGender()
    }).subscribe(({ motorTypeData, popularCities, mtorTypeByGender }) => {
      this.motorPieChartData.labels = Object.keys(motorTypeData);
      this.motorPieChartData.series = Object.values(motorTypeData);
      this.popularCitiesChartData.labels = Object.keys(popularCities);
      this.popularCitiesChartData.seriesData = [{name: 'Number of ', data: Object.values(popularCities)}];
      this.mtorTypeByGenderData.labels = mtorTypeByGender.labels;
      this.mtorTypeByGenderData.seriesData = mtorTypeByGender.seriesData.map((item) => ({name: item.name, data: Object.values(item.data)}))
      this.cdr.detectChanges();
    });
  }
}
