import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-variegata-post3',
  templateUrl: './variegata-post3.component.html',
  styleUrls: ['./variegata-post3.component.scss']
})
export class VariegataPost3Component implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("Michael Stowe | Project Variegata");
  }

  ngOnInit(): void {
  }

}
