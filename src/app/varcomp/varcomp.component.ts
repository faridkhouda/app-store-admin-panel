import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-varcomp',
  templateUrl: './varcomp.component.html',
  styleUrls: ['./varcomp.component.css']
})
export class VarcompComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
 // menuItems = ['dashboard', ’sales', 'orders', 'customers', 'products'];

}
