import { Component } from '@angular/core';

@Component({
  selector: 'app-shortlisted',
  templateUrl: './shortlisted.component.html'
})
export class ShortlistedComponent {
  shortlistedProfiles = JSON.parse(localStorage.getItem('shortlisted') || '[]');
}
