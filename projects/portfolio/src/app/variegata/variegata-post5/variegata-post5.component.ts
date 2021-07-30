import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-variegata-post5',
  templateUrl: './variegata-post5.component.html',
  styleUrls: ['./variegata-post5.component.scss']
})
export class VariegataPost5Component implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("Michael Stowe | Project Variegata");
  }
  ngOnInit(): void {
  }

}
