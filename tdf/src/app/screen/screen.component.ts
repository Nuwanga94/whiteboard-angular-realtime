import { Component, OnInit } from '@angular/core';
declare var require: any

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
      require('../../assets/js/main.js');
  }

}
