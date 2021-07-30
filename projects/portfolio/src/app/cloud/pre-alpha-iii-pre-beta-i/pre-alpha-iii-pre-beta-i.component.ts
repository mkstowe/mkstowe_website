import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pre-alpha-iii-pre-beta-i',
  templateUrl: './pre-alpha-iii-pre-beta-i.component.html',
  styleUrls: ['./pre-alpha-iii-pre-beta-i.component.scss']
})
export class PreAlphaIIIPreBetaIComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("Michael Stowe | Project Cloud");
  }

  ngOnInit(): void {
  }

}
