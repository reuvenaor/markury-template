import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavService } from '../navService.service';
import { MatSidenav } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  opened: boolean;

  @ViewChild('sidenav') public sidenav: MatSidenav = null;

  constructor( private sidenavService: SidenavService,
               iconRegistry: MatIconRegistry, sanitizer: DomSanitizer  ) {
                iconRegistry.addSvgIcon(
                  'logo',
                  sanitizer.bypassSecurityTrustResourceUrl('assets/img/nav/Logo.svg'));
                  iconRegistry.addSvgIcon(
                    'home',
                    sanitizer.bypassSecurityTrustResourceUrl('assets/img/nav/Home.svg'));
                    iconRegistry.addSvgIcon(
                      'workflow',
                      sanitizer.bypassSecurityTrustResourceUrl('assets/img/nav/Workflow.svg'));
                      iconRegistry.addSvgIcon(
                        'statics',
                        sanitizer.bypassSecurityTrustResourceUrl('assets/img/nav/Statistics.svg'));
                        iconRegistry.addSvgIcon(
                          'calander',
                          sanitizer.bypassSecurityTrustResourceUrl('assets/img/nav/Feed.svg'));
                          iconRegistry.addSvgIcon(
                            'users',
                            sanitizer.bypassSecurityTrustResourceUrl('assets/img/nav/Users.svg'));
                            iconRegistry.addSvgIcon(
                              'settings',
                              sanitizer.bypassSecurityTrustResourceUrl('assets/img/nav/Settings.svg'));
               }

  ngOnInit() {
    this.sidenavService.setSidenav(this.sidenav);
  }
