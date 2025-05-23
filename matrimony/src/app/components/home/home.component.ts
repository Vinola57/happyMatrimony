import { Component } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
profiles: any[] = [];
  currentIndex: number = 0;

  constructor(
    private profileService: ProfileService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.profileService.getProfiles().subscribe((data) => {
      this.profiles = data;
    });
  }

handleAction(action: { type: string; profile?: any }) {
  if (action.type === 'view' && action.profile) {
    this.router.navigate(['/profile-view'], { state: { profile: action.profile } });
    return;
  } else if (action.type === 'interested') {
    this.snackBar.open('Interested', 'Close', {
      duration: 2000,
      verticalPosition: 'top'
    });
    this.moveToNextProfile();
  } else if (action.type === 'not-interested') {
    this.snackBar.open('Not Interested', 'Close', {
      duration: 2000,
      verticalPosition: 'top'
    });
    this.moveToNextProfile();
  } else if (action) {
    this.snackBar.open(`${action.type}`, 'Close', {
      duration: 2000,
      verticalPosition: 'top'
    });
    this.moveToNextProfile();
  }
}
  moveToNextProfile() {
    if (this.currentIndex < this.profiles.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // loop back or handle end of list
    }
  }
}
