import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TallyListComponent } from './tally-list/tally-list.component';
import { ButtonNewTallyComponent } from './button-new-tally/button-new-tally.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TallyListComponent,
    ButtonNewTallyComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test2';
}