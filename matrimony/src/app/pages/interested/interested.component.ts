import { Component } from '@angular/core';

@Component({
  selector: 'app-interested',
  templateUrl: './interested.component.html'
})
export class InterestedComponent {
  interestedProfiles = JSON.parse(localStorage.getItem('interested') || '[]');
}
