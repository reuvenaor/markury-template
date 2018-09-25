import { Component } from '@angular/core';
import { Message } from 'src/app/content/body/shared-classes/message.model';
import { USERS } from 'src/app/content/body/shared-classes/users-consts';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})

export class MessageComponent {
  users: USERS = new USERS;
  currentUser: string;

  messages: Message[] = [
    new Message( this.users.ninaName,
     ' 5 minutes ago',
     'Hey You! It’s me again :-) I attached new (...)'),
    new Message( this.users.ninaName,
       ' 5 minutes ago',
       'Hey You! It’s me again :-) I attached new (...)'),
    new Message( this.users.jamesName,
       ' 5 minutes ago',
       'Hey You! It’s me again :-) I attached new (...)'),
    new Message( this.users.ninaName,
       ' 5 minutes ago',
       'Hey You! It’s me again :-) I attached new (...)')
    ];

  constructor() {}

  getHeight() {
    return (this.messages.length * 108 + 91) + 'px';
  }


}
