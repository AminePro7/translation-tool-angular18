import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.scss'],
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
export class TranslatorComponent {
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
