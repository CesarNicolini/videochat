import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { UserInfo } from '../signalr/models';
import { Observable } from 'rxjs';
import { RtcService } from '../signalr/rtc-service.service';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  @Output() userSelected: EventEmitter<UserInfo> = new EventEmitter();

  public users$: Observable<Array<UserInfo>>;


  constructor(private rtcService: RtcService) { }

  ngOnInit() {
    this.users$ = this.rtcService.users$;
  }

  public userClicked(user: UserInfo) {
    this.userSelected.emit(user);
  }
}
