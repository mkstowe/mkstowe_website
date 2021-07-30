import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-variegata-post1',
  templateUrl: './variegata-post1.component.html',
  styleUrls: ['./variegata-post1.component.scss']
})
export class VariegataPost1Component implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("Michael Stowe | Project Variegata");
  }

  ngOnInit(): void {
  }

}
