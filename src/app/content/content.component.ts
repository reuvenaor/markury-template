import { Component, ViewChild, Renderer2 } from '@angular/core';
import { SidenavService } from '../navService.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent  {
  private opened = false;
  @ViewChild('contentBox') private _container;

  constructor (
    private sidenav: SidenavService = null,
    private renderer: Renderer2 = null
    ) { }

    toggleLeftSidenav() {
    this.sidenav.toggle();
    if (this.opened === false) {
      this.opened = true;
      setTimeout(() => {
        this.renderer.setStyle(this._container.nativeElement, 'left', '16%');
        this.renderer.setStyle(this._container.nativeElement, 'width', '84%');
      }, 0);
    } else {
      this.opened = false;
      setTimeout(() => {
        this.renderer.setStyle(this._container.nativeElement, 'left', '0');
        this.renderer.setStyle(this._container.nativeElement, 'width', '100%');
      }, 0);
    }
  }

}

