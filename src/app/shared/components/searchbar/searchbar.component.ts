import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],  // Asegúrate de usar 'styleUrls' correctamente
  imports: [MatFormFieldModule, MatIconModule, MatInputModule],  // Correcto para los componentes standalone
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchbarComponent {}