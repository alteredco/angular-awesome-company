import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkersListComponent } from './workers/workers-list/worker-list.component';
import { WorkerDetailComponent } from './workers/worker-detail/worker-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WorkerCardComponent } from './workers/worker-card/worker-card.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FullscreenVideoComponent } from './fullscreen-video/fullscreen-video.component';
import { StepperComponent } from './stepper/stepper.component';
import { DialogContentDialogComponent } from './dialog-content-dialog/dialog-content-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkersListComponent,
    WorkerDetailComponent,
    NavbarComponent,
    WorkerCardComponent,
    AboutComponent,
    PageNotFoundComponent,
    FullscreenVideoComponent,
    StepperComponent,
    DialogContentDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatBadgeModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatSnackBarModule,
    MatTabsModule,
    MatFormFieldModule,
    MatStepperModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
