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
    const nav = this.router.getCurrentNavigation();
    this.profile = nav?.extras?.state?.['profile'];

  }
  ngOnInit() {
    this.profile = history.state.profile;
  }
  goBack() {
    this.location.back();
  }

  onViewProfile(profile: any) {
    this.router.navigate(['/profile-view', profile.id]);
  }
}