import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-variegata-post10',
  templateUrl: './variegata-post10.component.html',
  styleUrls: ['./variegata-post10.component.scss']
})
export class VariegataPost10Component implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("Michael Stowe | Project Variegata");
  }
  ngOnInit(): void {
  }

}
