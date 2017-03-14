import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-profile-stats',
  templateUrl: './user-profile-stats.component.html',
  styleUrls: ['./user-profile-stats.component.css']
})
export class UserProfileStatsComponent implements OnInit {

  public lineCharts: LineChart[] = [
    { words: 20, day: 'Monday', icon:'star'},
    { words: 23, day: 'Tuesday', icon: 'star'},
    { words: 15, day: 'Wednesday', icon: 'star_half'},
    { words: 30, day: 'Thursday', icon: 'whatshot'},
    { words: 25, day: 'Friday', icon: 'star'},
    { words: 10, day: 'Saturday', icon: 'star_border'},
    { words: 5, day: 'Sunday', icon: 'star_border'}
  ];

  public lineChartData:Array<any> = [
    {data: this.lineCharts.map(e => e.words), label:'Words Learned Per Day'}
  ];
  public lineChartLabels:Array<any> = this.lineCharts.map(e => e.day);
  public lineChartIcons:Array<any> = this.lineCharts.map(e => e.icon);
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  constructor() {
  }

  ngOnInit() {
  }

}

export class LineChart {
  words: number;
  day: string;
  icon: string;
}
