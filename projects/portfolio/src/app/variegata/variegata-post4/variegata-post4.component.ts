import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-variegata-post4',
  templateUrl: './variegata-post4.component.html',
  styleUrls: ['./variegata-post4.component.scss']
})
export class VariegataPost4Component implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("Michael Stowe | Project Variegata");
  }
  ngOnInit(): void {
  }

}
