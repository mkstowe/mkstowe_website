import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pre-beta-i-pre-beta-ii',
  templateUrl: './pre-beta-i-pre-beta-ii.component.html',
  styleUrls: ['./pre-beta-i-pre-beta-ii.component.scss']
})
export class PreBetaIPreBetaIIComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("Michael Stowe | Project Cloud");
  }

  ngOnInit(): void {
  }

}
