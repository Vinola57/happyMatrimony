import { Component, OnInit, HostListener, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pending-profile',
  templateUrl: './pending-profile.component.html',
  styleUrls: ['./pending-profile.component.scss']
})
export class PendingProfileComponent implements OnInit, AfterViewInit {
  profiles: any[] = [];
  currentIndex = 0;
  visibleCount = 1;
  isAnimating = false;
  visibleProfiles: any[] = [];
  rotatingProfileId: any = null;

  @ViewChild('profileRow', { static: false }) profileRow!: ElementRef;
  isRotating = false;

  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit() {
    this.profiles = this.profileService.getPendingProfiles();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.updateVisibleCount();
      this.updateVisibleProfiles();
    });
  }

  @HostListener('window:resize')
  onResize() {
    this.updateVisibleCount();
    this.updateVisibleProfiles();
  }

  updateVisibleCount() {
    const cardWidth = 350; // px
    const gap = 16; // px
    const container = this.profileRow?.nativeElement?.offsetWidth || window.innerWidth;
    this.visibleCount = Math.max(1, Math.floor((container + gap) / (cardWidth + gap)));
  }

  get canScrollLeft(): boolean {
    return this.currentIndex > 0;
  }

  get canScrollRight(): boolean {
    return this.currentIndex + this.visibleCount < this.profiles.length;
  }

  scrollLeft() {
    if (this.canScrollLeft) {
      this.currentIndex--;
      this.updateVisibleProfiles();
    }
  }

  scrollRight() {
    if (this.canScrollRight) {
      this.currentIndex++;
      this.updateVisibleProfiles();
    }
  }

  updateVisibleProfiles() {
    this.visibleProfiles = this.profiles.slice(this.currentIndex, this.currentIndex + this.visibleCount);
  }

  swipeYes(profile: any) {
    if (this.isAnimating || this.currentIndex >= this.profiles.length) return;

    this.isAnimating = true;

    setTimeout(() => {
      const index = this.profiles.indexOf(profile);
      if (index !== -1) {
        this.profiles.splice(index, 1);
        if (this.currentIndex > 0 && this.currentIndex + this.visibleCount > this.profiles.length) {
          this.currentIndex--;
        }
        this.updateVisibleProfiles();
      }
      this.isAnimating = false;
      this.onViewProfile(profile);
    }, 600);
  }

  swipeNo(profile: any) {
    if (this.isAnimating || this.currentIndex >= this.profiles.length) return;

    this.isAnimating = true;

    setTimeout(() => {
      const index = this.profiles.indexOf(profile);
      if (index !== -1) {
        this.profiles.splice(index, 1);
        if (this.currentIndex > 0 && this.currentIndex + this.visibleCount > this.profiles.length) {
          this.currentIndex--;
        }
        this.updateVisibleProfiles();
      }
      this.isAnimating = false;
    }, 600);
  }

  onViewProfile(profile: any) {
    this.router.navigate(['/profile-view'], { state: { profile } });
  }

  showAllProfiles() {
    this.profiles = this.profileService.getPendingProfiles();
    this.currentIndex = 0;
    this.updateVisibleProfiles();
  }
  onProfileImageClick() {
    this.isRotating = true;
    setTimeout(() => {
      this.isRotating = false;
    }, 600);
  }
}