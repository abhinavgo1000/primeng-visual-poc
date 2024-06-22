import { Component } from '@angular/core';

import { BarChartComponent } from '../../charts/bar-chart/bar-chart.component';
import { LineChartComponent } from '../../charts/line-chart/line-chart.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    BarChartComponent,
    LineChartComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
