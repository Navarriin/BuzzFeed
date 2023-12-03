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

  answers: string[] = [];
  answerSelected: string = '';

  questionIndex: number = 0;
  questionMaxIndex!: number;

  finished: boolean = false;

  ngOnInit(): void {
    if (quizz_questions) {
      this.title = quizz_questions.title;

      this.questions = quizz_questions.questions;
      this.loadQuestions();

      this.questionMaxIndex = this.questions.length;
    }
  }

  nextQuestion(alias: string): void {
    if (this.questionIndex < this.questionMaxIndex) this.questionIndex += 1;
    this.answers.push(alias);
    this.loadQuestions();
  }

  loadQuestions(): void {
    this.questionSelected = this.questions[this.questionIndex];

    if (this.questionIndex === this.questionMaxIndex) this.finished = true;
  }

  result(): void {}
}
