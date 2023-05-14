import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-variegata-post9',
  templateUrl: './variegata-post9.component.html',
  styleUrls: ['./variegata-post9.component.scss']
})
export class VariegataPost9Component implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("Michael Stowe | Project Variegata");
  }
  ngOnInit(): void {
  }

}
