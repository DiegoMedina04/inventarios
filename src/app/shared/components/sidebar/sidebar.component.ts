import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SidebarService } from '../../../core/services/shared/sidebar.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  imports: [MatButtonModule, MatIconModule, RouterLink],
})
export class SidebarComponent {
  sidebarVisible = true;
  private sidebarVisibilitySubscription: Subscription;

  constructor(private sidebarService: SidebarService , private router: Router) {
    
  
    this.sidebarVisibilitySubscription = this.sidebarService.sidebarVisibility$.subscribe(isVisible => {
      this.sidebarVisible = isVisible;
    });
  }

  ocultarSidebar() {
    this.sidebarService.toggleSidebarVisibility();
  }
  ngOnDestroy(): void {
    if (this.sidebarVisibilitySubscription) {
      this.sidebarVisibilitySubscription.unsubscribe();
    }
  }
  navigateToHome() {
    this.router.navigate(['/']);
  }
}
