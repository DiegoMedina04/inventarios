import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import {MatBadgeModule} from '@angular/material/badge';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'], 
  imports: [MatFormFieldModule, MatIconModule, MatInputModule , MatBadgeModule, ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchbarComponent{
  constructor(private authService: AuthService){

  }
  logout(){
    this.authService.logout()
  }
}