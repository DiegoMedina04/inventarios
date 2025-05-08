import { Component, OnInit } from '@angular/core';
import { SidebarService } from './core/services/shared/sidebar.service'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  sidebarVisible: boolean = true;

  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {
    this.sidebarService.sidebarVisibility$.subscribe(isVisible => {
      this.sidebarVisible = isVisible;
    });
  }
}