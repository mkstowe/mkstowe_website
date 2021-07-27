import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  @Input() icon_name: string;
  @Input() skill: string;
  @Input() percentage: string;


  constructor() { }

  ngOnInit(): void {
  }

}
