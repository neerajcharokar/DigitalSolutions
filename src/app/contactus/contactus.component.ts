import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'My first AGM project';
  lat = 22.745385746450403;
  lng = 75.8950424329582;
  zoom=18
}
