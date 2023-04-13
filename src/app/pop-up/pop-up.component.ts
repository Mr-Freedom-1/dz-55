import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GroupName } from '../service/group-name.service';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent {
    groupName: string = '';
    numOfMembers: number = 0;
    @Output() close = new EventEmitter

    constructor(public groupNameService: GroupName, public userService: UsersService) { }

    ngOnInit() {
        this.groupName = this.groupNameService.groupName;
        this.numOfMembers = this.userService.getNumOfUsers();
    }

    onClose() {
        this.close.emit();
    }
}

