import { Component, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';
import { PopUpComponent } from './pop-up/pop-up.component';
import { UsersService } from './service/users.service';
import { GroupName } from './service/group-name.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService, GroupName],
})
export class AppComponent {
  users: any[] = [];

  constructor(public userService: UsersService, public groupNameService: GroupName) {
    this.users = userService.users;
  }

  @ViewChild('popUp', { read: ViewContainerRef })
  private viewRef!: ViewContainerRef
  private componentRef!: ComponentRef<PopUpComponent>

  showPopUp(){
    this.componentRef = this.viewRef.createComponent(PopUpComponent);
  this.componentRef.instance.close.subscribe(() => {
    this.viewRef.clear();
  });
  }
}