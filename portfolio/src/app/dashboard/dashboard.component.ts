import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators'
import { ImageApiService } from '../image-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  divHeight: string;
  dateTime: Observable<Date>;
  image: any;

  constructor(private imageApiService: ImageApiService, private titleService: Title) {
    this.titleService.setTitle("~");
  }

  ngOnInit() {
    this.dateTime = timer(0, 1000).pipe(
      map(() => {
        return new Date();
      })
    );

    this.imageApiService.getImage().subscribe((resp: any) => {
      console.log(resp);
      this.image = resp;
    });
  }

}
