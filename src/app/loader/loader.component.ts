// https://codepen.io/nikhil8krishnan/pen/rVoXJa
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  
  @Input() color: string;

  constructor() { }

  ngOnInit() {}

}
