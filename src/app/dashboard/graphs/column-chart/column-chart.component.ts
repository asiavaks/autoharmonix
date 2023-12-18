import { Component, ViewChild, Input } from "@angular/core";
import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid
} from "ng-apexcharts";
import { ChartInput } from "src/app/models/charts.model";

type ApexXAxis = {
  type?: "category" | "datetime" | "numeric";
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
};

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.scss']
})
export class ColumnChartComponent {
  @ViewChild("chart") chart!: ChartComponent;
  @Input() chartInput: ChartInput = { seriesData: [], labels: [] };
  public chartOptions!: Partial<ChartOptions>;

  constructor() {

  }
  ngOnInit() {
    const a = this.chartInput.labels;
    const b = this.chartInput.seriesData;
    console.log(a, b);
    
    this.chartOptions = {
      series: this.chartInput.seriesData,
      chart: {
        height: 350,
        type: "bar",
        stacked: this.chartInput.seriesData.length == 1 ? false : true,
        events: {
          click: function (chart, w, e) {
            // console.log(chart, w, e)
          }
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
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: this.chartInput.seriesData.length == 1 ? true : false
        }
      },
      dataLabels: {
        enabled: true
      },
      legend: {
        show: false
      },
      grid: {
        show: false
      },
      yaxis: {
        title: {
          text: "$ (thousands)",
        },
        labels: {
          style: {
            colors: ["#B5C7C8"]
          }
        }
      },
      xaxis: {
        categories: this.chartInput.labels,
        labels: {
          style: {
            colors: [
              "#B5C7C8",
              "#B5C7C8",
              "#B5C7C8",
              "#B5C7C8",
              "#B5C7C8",
              "#B5C7C8",
              "#B5C7C8",
              "#B5C7C8"
            ],
            fontSize: "12px"
          }
        }
      }
    };
  }
}

