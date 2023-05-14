import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-variegata',
  templateUrl: './variegata.component.html',
  styleUrls: ['./variegata.component.scss']
})
export class VariegataComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("Michael Stowe | Project Variegata");
  }

  ngOnInit(): void {
  }

}
