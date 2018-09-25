import { Component } from '@angular/core';
import { Activity } from 'src/app/content/body/shared-classes/activity.model';
import { USERS } from 'src/app/content/body/shared-classes/users-consts';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent  {
  users: USERS = new USERS;

  activities: Activity[] = [
    new Activity( this.users.ninaName,
      'added a new project',
      'Free UI Kit',
      'Just now'),
      new Activity( this.users.jamesName,
      ' commented project',
      'Free PSD Template',
      '40 minutes ago'),
      new Activity( 'Alex Clooney',
      'completed task',
      'Symu Website',
      '1 hour ago'),
      new Activity( 'Alexandra Spears',
      'added a new project',
      'Free PSD (...)',
      '3 hours ago')
  ];
  constructor() { }


  getHeight() {
    return (this.activities.length * 108 + 91) + 'px';
  }

}
