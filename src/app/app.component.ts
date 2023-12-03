import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizzComponent } from './components/quizz/quizz.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, QuizzComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'buzzFeed';
}
