import { Component } from '@angular/core';
import { GroupName } from '../service/group-name.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public groupNameService: GroupName) {}

  get groupName(): string {
    return this.groupNameService.groupName;
  }

  editGroupName(newGroupName: string) {
    this.groupNameService.groupName = newGroupName;
  }
}

