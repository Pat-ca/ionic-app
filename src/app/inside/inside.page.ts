import { Component, OnInit } from '@angular/core';
import { AccessService } from '../access.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inside',
  templateUrl: './inside.page.html',
  styleUrls: ['./inside.page.scss'],
  standalone: false
})
export class InsidePage implements OnInit {
  logoutTimer! : Observable<number>;
  constructor(private accessService: AccessService) { }

  ngOnInit() {
    this.logoutTimer = this.accessService.logoutTimer.asObservable();
  }

  ionViewDidEnter() {
    this.accessService.resetLogoutTimer();
  }
}
