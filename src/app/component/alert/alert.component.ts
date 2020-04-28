import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  isShow = false;

  constructor() { }

  ngOnInit(): void {
  }

  closeAlert() {
    this.isShow = true;
    console.log("ok");
  }
}
