import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private sidebarVisibilitySubject = new BehaviorSubject<boolean>(true);
  sidebarVisibility$ = this.sidebarVisibilitySubject.asObservable();

  constructor() { }

  toggleSidebarVisibility() {
    this.sidebarVisibilitySubject.next(!this.sidebarVisibilitySubject.value);
  }


  setSidebarVisibility(isVisible: boolean) {
    this.sidebarVisibilitySubject.next(isVisible);
  }
}
