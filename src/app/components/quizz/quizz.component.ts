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

  starter: boolean = true;
  finished: boolean = false;

  ngOnInit(): void {
    if (quizz_questions) {
      this.title = quizz_questions.title;
      this.questions = quizz_questions.questions;

      this.loadQuestions();

      this.questionMaxIndex = this.questions.length - 1;
    }
  }

  nextQuestion(alias: string): void {
    if (this.questionIndex < this.questionMaxIndex) {
      this.questionIndex += 1;
      this.loadQuestions();

      if (alias === 'B') {
        this.hero.push(alias);
      } else {
        this.vilan.push(alias);
      }
    } else if (this.questionIndex === this.questionMaxIndex) {
      this.result();
      this.starter = false;
      this.finished = true;
    }
  }

  loadQuestions(): void {
    this.questionSelected = this.questions[this.questionIndex];
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
    this.starter = true;
    this.finished = false;
    this.loadQuestions();
  }
}
