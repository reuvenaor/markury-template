import '../polyfills';
import { FlexLayoutModule, BREAKPOINTS, DEFAULT_BREAKPOINTS } from '@angular/flex-layout';
import { FlexModule } from '@angular/flex-layout/flex';
import { GridModule } from '@angular/flex-layout/grid';

// FlexLayoutModule.withConfig(configOptions, [breakpoints]);
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


 export const BreakPointsProvider = {
  provide: BREAKPOINTS,
   useValue: DEFAULT_BREAKPOINTS
 };

/*  overlay-based components for components inside of a global overlay container */
import {OverlayContainer} from '@angular/cdk/overlay';

import { SidenavService } from './navService.service';
import { LayoutModule } from '@angular/cdk/layout';

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';

import { NavComponent } from './nav/nav.component';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { BodyComponent } from './content/body/body.component';
import { TaskComponent } from './content/body/task/task.component';
import { ActivityComponent } from './content/body/activity/activity.component';
import { MessageComponent } from './content/body/message/message.component';


@NgModule({
  exports: [
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
  ],
  declarations: []
})
export class DemoMaterialModule {}
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentComponent,
    BodyComponent,
    TaskComponent,
    MessageComponent,
    ActivityComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    FormsModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    FlexModule,
    GridModule
  ],
  providers: [SidenavService, BreakPointsProvider],
  bootstrap: [AppComponent]
})
/*  overlay-based components for components inside of a global overlay container  */
/*  ! need to add correct css class to the <body> tag during build.
/*  before: export class AppModule { }                                            */
export class AppModule { constructor(overlayContainer: OverlayContainer) {
  overlayContainer.getContainerElement().classList.add('test-ui-theme');
}

}

platformBrowserDynamic().bootstrapModule(AppModule);
