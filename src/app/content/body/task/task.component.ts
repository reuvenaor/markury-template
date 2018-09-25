import { Component } from '@angular/core';
import { Task } from 'src/app/content/body/shared-classes/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  tasks: Task[] = [
    new Task( 'New website for Symu.co',
      ' 5 days delays'),
     new Task( 'Free business PSD Template' ,
        ' 2 days delays'),
     new Task( 'New logo for JCD.pl',
        ' 5 days left'),
     new Task( 'Free Icons Set vol. 3',
        ' 10 days left')
  ];
  constructor() { }

  getHeight() {
    return (this.tasks.length * 108 + 91) + 'px';
  }
  getPresentImg(srt: string) {
    if (srt.trim().charAt(0).toLocaleLowerCase() === 'n') {
      return '/src/assets/img/N.png';
    } else {
      return '/src/assets/img/F.png';
    }
  }

}
