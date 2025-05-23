import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

type ActionEvent =
  | { type: 'not-interested' }
  | { type: 'interested' }
  | { type: 'shortlist' }
  | { type: 'view'; profile: any };

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent {
  @Input() profile: any;
  @Input() index!: number;
  @Input() total!: number;
 @Output() action = new EventEmitter<{ type: string, profile?: any }>();
  
constructor(private router: Router) {}

  isShortlisted = false;

onSwipeLeft() {
  console.log('Left clicked');
  this.action.emit({ type: 'not-interested' });
}

onSwipeRight() {
  this.action.emit({ type: 'interested', profile: this.profile });
}

onShortlist() {
  this.isShortlisted = !this.isShortlisted;
  this.action.emit({ type: 'shortlist', profile: this.profile });
}
}