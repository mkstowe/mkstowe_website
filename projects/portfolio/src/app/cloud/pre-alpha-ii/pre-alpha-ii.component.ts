import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pre-alpha-ii',
  templateUrl: './pre-alpha-ii.component.html',
  styleUrls: ['./pre-alpha-ii.component.scss']
})
export class PreAlphaIIComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("Michael Stowe | Project Cloud");
  }

  ngOnInit(): void {
  }

}
