import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pre-alpha-i',
  templateUrl: './pre-alpha-i.component.html',
  styleUrls: ['./pre-alpha-i.component.scss']
})
export class PreAlphaIComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("Michael Stowe | Project Cloud");
  }

  ngOnInit(): void {
  }

}
