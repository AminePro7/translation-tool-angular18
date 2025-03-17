import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private baseUrl = 'https://api.mymemory.translated.net/get';

  constructor(private http: HttpClient) { }

  translate(text: string, fromLang: string = 'en', toLang: string = 'fr'): Observable<string> {
    const params = {
      q: text,
      langpair: `${fromLang}|${toLang}`
    };

    return this.http.get(this.baseUrl, { params }).pipe(
      map((response: any) => {
        if (response.responseStatus === 200) {
          return response.responseData.translatedText;
        } else {
          throw new Error('Translation failed');
        }
      })
    );
  }
}
