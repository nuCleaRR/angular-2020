import { Component, Input, OnInit } from '@angular/core';
import { IHotel } from '../models/IHotel';

@Component({
  selector: 'app-hotel-info',
  templateUrl: './hotel-info.component.html',
  styleUrls: ['./hotel-info.component.css']
})
export class HotelInfoComponent implements OnInit {
  @Input()
  public hotel: IHotel;

  constructor() { }

  ngOnInit(): void {
  }

}
