import { Component, OnInit } from '@angular/core';
import * as moment from "moment";

@Component({
  selector: 'lib-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  time: string;

  ngOnInit(): void {
    this.time = moment().format('DD.MM.YYYY')
  }

}
