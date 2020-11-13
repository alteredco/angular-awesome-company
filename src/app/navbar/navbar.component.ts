import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  showFiller = false;
  durationInSeconds = 500;

  constructor(
    private _snackBar: MatSnackBar,
    private breakpointObserver: BreakpointObserver
  ) {}

  title = 'Everything is Awesome!';

  openSnackBar() {
    const config = new MatSnackBarConfig();
    config.panelClass = ['awesome'];
    this._snackBar.open("It's Awesome!", '', {
      duration: this.durationInSeconds,
    });
  }

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  ngOnInit(): void {}
}
