import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-variegata-post2',
  templateUrl: './variegata-post2.component.html',
  styleUrls: ['./variegata-post2.component.scss']
})
export class VariegataPost2Component implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("Michael Stowe | Project Variegata");
  }

  ngOnInit(): void {
  }

}
