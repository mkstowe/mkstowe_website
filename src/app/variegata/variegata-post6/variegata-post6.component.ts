import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-variegata-post6',
  templateUrl: './variegata-post6.component.html',
  styleUrls: ['./variegata-post6.component.scss']
})
export class VariegataPost6Component implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("Michael Stowe | Project Variegata");
  }
  ngOnInit(): void {
  }

}
