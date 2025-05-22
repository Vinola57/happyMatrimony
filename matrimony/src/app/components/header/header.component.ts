import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router) {}

  goTo(page: string) {
    if (page === 'logout') {
      // Add logout logic here if needed
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/' + page]);
    }
  }
}