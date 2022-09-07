import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-slot-button',
  templateUrl: './slot-button.component.html',
  styleUrls: ['./slot-button.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SlotButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
