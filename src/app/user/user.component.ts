import { Component, Input } from '@angular/core';
import { GroupName } from '../service/group-name.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() name = ''
  @Input() status = ''
  @Input() img = ''

  constructor(public groupNameService: GroupName) {}

  get groupName(): string {
    return this.groupNameService.groupName;
  }

  editName(newName: string) {
    if (newName !== '') {
      this.name = newName;
    }
  }
  
  editStatus(newStatus: string) {
    if (newStatus !== '') {
      this.status = newStatus;
    }
  }

  editGroupName(newGroupName: string) {
    if (newGroupName !== '') {
      this.groupNameService.groupName = newGroupName;
    }
  }
}

