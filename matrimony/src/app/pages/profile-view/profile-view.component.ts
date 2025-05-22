import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent {
  profile: any;

  constructor(private router: Router, private location: Location) {
    // Navigation state is used to retrieve the profile passed from profile-card
const nav = this.router.getCurrentNavigation();
this.profile = nav?.extras?.state?.['profile'];

  }
   ngOnInit() {
    // This works for both navigation and page refresh
    this.profile = history.state.profile;
  }
  goBack() {
    this.location.back();
  }

  // This method is only meaningful in the profile-card context where the click originates
  // It's not used in the profile-view component directly, but defined here as per your request
  onViewProfile(profile: any) {
    this.router.navigate(['/profile-view', profile.id ]);
  }
}