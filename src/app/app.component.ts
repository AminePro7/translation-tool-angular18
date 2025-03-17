import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <mat-card class="translation-card">
        <mat-card-header>
          <mat-card-title>Translation Tool</mat-card-title>
          <mat-card-subtitle>English to French</mat-card-subtitle>
        </mat-card-header>

        <mat-card-content>
          <div class="translation-form">
            <mat-form-field appearance="fill" class="full-width">
              <mat-label>Enter English text</mat-label>
              <textarea matInput [(ngModel)]="sourceText" rows="4" placeholder="Type or paste your text here..."></textarea>
            </mat-form-field>

            <button mat-raised-button color="primary" (click)="translate()" [disabled]="isLoading || !sourceText.trim()">
              <span *ngIf="!isLoading">Translate</span>
              <mat-spinner diameter="20" *ngIf="isLoading"></mat-spinner>
            </button>

            <div class="error-message" *ngIf="error">{{ error }}</div>

            <mat-form-field appearance="fill" class="full-width" *ngIf="translatedText">
              <mat-label>French translation</mat-label>
              <textarea matInput [value]="translatedText" rows="4" readonly></textarea>
            </mat-form-field>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      padding: 20px;
    }

    .translation-card {
      width: 100%;
      max-width: 800px;
      margin: 20px;
      padding: 20px;
    }

    .translation-form {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .full-width {
      width: 100%;
    }

    .error-message {
      color: #f44336;
      font-size: 14px;
      margin-top: -10px;
    }

    button {
      align-self: center;
      min-width: 120px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    mat-spinner {
      margin: 0 8px;
    }
  `],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule
  ]
})
export class AppComponent {
  sourceText = '';
  translatedText = '';
  isLoading = false;
  error = '';

  constructor(private translationService: TranslationService) {}

  translate() {
    if (!this.sourceText.trim()) {
      this.error = 'Please enter some text to translate';
      return;
    }

    this.isLoading = true;
    this.error = '';

    this.translationService.translate(this.sourceText).subscribe({
      next: (result) => {
        this.translatedText = result;
        this.isLoading = false;
      },
      error: (error) => {
        this.error = 'Translation failed. Please try again later.';
        this.isLoading = false;
        console.error('Translation error:', error);
      }
    });
  }
}
