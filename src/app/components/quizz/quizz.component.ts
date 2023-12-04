import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import quizz_questions from '../../../assets/data/quizz_questions.json';

@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.scss',
})
export class QuizzComponent {
  title: string = '';

  questions: any;
  questionSelected: any;

  hero: string[] = [];
  vilan: string[] = [];
  answerSelected: string = '';

  questionIndex: number = 0;
  questionMaxIndex!: number;

  finished: boolean = false;

  ngOnInit(): void {
    if (quizz_questions) {
      this.title = quizz_questions.title;
      this.questions = quizz_questions.questions;
      this.questionMaxIndex = this.questions.length;
      this.questionSelected = this.questions[this.questionIndex];
    }
  }

  nextQuestion(alias: string): void {
    this.questionIndex += 1;

    if (this.questionIndex < this.questionMaxIndex) {
      this.questionSelected = this.questions[this.questionIndex];

      switch (alias) {
        case 'B':
          this.hero.push(alias);
          break;
        default:
          this.vilan.push(alias);
      }
    } else if (this.questionIndex === this.questionMaxIndex) {
      this.result();
      this.finished = !this.finished;
    }
  }

  result(): void {
    if (this.hero.length > this.vilan.length) {
      this.answerSelected = quizz_questions.results.B;
    } else {
      this.answerSelected = quizz_questions.results.A;
    }
  }

  resetGame(): void {
    this.hero = [];
    this.vilan = [];
    this.questionIndex = 0;
    this.finished = !this.finished;
    this.questionSelected = this.questions[this.questionIndex];
  }
}
