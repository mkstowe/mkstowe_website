import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators'
import { ImageApiService } from './image-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  divHeight: string;
  dateTime: Observable<Date>;
  image: any;

  constructor(private imageApiService: ImageApiService) { }

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
