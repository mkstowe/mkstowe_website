import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-variegata-post7',
  templateUrl: './variegata-post7.component.html',
  styleUrls: ['./variegata-post7.component.scss']
})
export class VariegataPost7Component implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("Michael Stowe | Project Variegata");
  }
  ngOnInit(): void {
  }

}
