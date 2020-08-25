import { Component, Input, OnInit } from '@angular/core';
import { Hotel } from '../models/hotel';

@Component({
  selector: 'app-hotel-info',
  templateUrl: './hotel-info.component.html',
  styleUrls: ['./hotel-info.component.css']
})
export class HotelInfoComponent implements OnInit {

  @Input()
  public selectedHotel: Hotel;

  public constructor() { }

  public ngOnInit(): void {
  }

}
