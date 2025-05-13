import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SidebarService } from './core/services/shared/sidebar.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  sidebarVisible: boolean = true;
  isLoginPage: boolean = false;

  constructor(private sidebarService: SidebarService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.isLoginPage = this.router.url === '/login';
    });

    this.sidebarService.sidebarVisibility$.subscribe(isVisible => {
      this.sidebarVisible = isVisible;
    });
  }
}
