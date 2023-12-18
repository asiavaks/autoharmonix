import { Component, ViewChild, Input } from "@angular/core";
import { ApexDataLabels, ApexLegend, ChartComponent } from "ng-apexcharts";
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";
import { PieChartInput } from "src/app/models/charts.model";



export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  colors: string[];
  dataLabels: ApexDataLabels; 
  legend: ApexLegend;
};

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {
  @ViewChild("chart") chart!: ChartComponent;
  @Input() pieChartData: PieChartInput = { series: [], labels: [] };
  public chartOptions!: Partial<ChartOptions>;

  

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.pieChartData);
    this.chartOptions = {
      series: this.pieChartData.series,
      chart: {
        width: 380,
        type: "pie"
      },
      dataLabels: {
        enabled: true,
        style: {
          colors: ["#fff"]
        }
      },
      legend: {
        labels: {
          colors: ['#fff', '#fff']
        }
      },
      colors: [
        "#5da7c0",
        "#C66632",
        "#5da7c0",
        "#C66632",
        "#5da7c0",
        "#C66632",
        "#5da7c0",
        "#C66632"
      ],
      labels: this.pieChartData.labels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
}





