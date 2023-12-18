export interface PieChartInput {
    series: number[];
    labels: string[]
  }

  export interface ChartInput {
    seriesData: {
        name: string
        data: number[];
    }[]
    labels: string[];
  }