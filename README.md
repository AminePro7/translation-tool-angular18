# Angular Translation App

A modern web application built with Angular 18 that translates text from English to French using the MyMemory Translation API. This application demonstrates the use of modern Angular features, including standalone components, dependency injection, and reactive programming with RxJS.

## Features

- **Modern Angular Architecture**
  - Standalone components for better modularity
  - Dependency injection for service management
  - RxJS for reactive state management
  - Angular Material for UI components

- **Translation Capabilities**
  - Real-time English to French translation
  - Support for large text inputs
  - Preserves text formatting
  - Rate limit handling for API calls

- **User Interface**
  - Clean and intuitive Material Design
  - Responsive layout for all screen sizes
  - Loading indicators for better UX
  - Error messages with user-friendly feedback
  - Character count and input validation

- **Performance**
  - Lazy loading of components
  - Optimized API calls
  - Efficient error handling
  - Fast response times

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)
- Angular CLI (`npm install -g @angular/cli@18`)
- A modern web browser (Chrome, Firefox, Safari, or Edge)

## Project Setup

1. **Clone the repository:**
```bash
git clone <repository-url>
cd translation-app
```

2. **Install dependencies:**
```bash
npm install
```

3. **Environment Setup:**
Create a new file `src/environments/environment.ts`:
```typescript
export const environment = {
  production: false,
  apiUrl: 'https://api.mymemory.translated.net/get'
};
```

4. **Start the development server:**
```bash
npm start
```

5. **Access the application:**
Open your browser and navigate to `http://localhost:4200`

## Project Structure

```
translation-app/
├── src/
│   ├── app/
│   │   ├── services/
│   │   │   └── translation.service.ts    # API communication service
│   │   ├── components/
│   │   │   └── translator/
│   │   │       ├── translator.component.ts
│   │   │       ├── translator.component.html
│   │   │       └── translator.component.scss
│   │   ├── interfaces/
│   │   │   └── translation.interface.ts  # TypeScript interfaces
│   │   ├── app.component.ts              # Main app component
│   │   ├── app.component.html            # Main app template
│   │   └── app.component.scss            # Main app styles
│   ├── assets/
│   │   └── i18n/                         # Internationalization files
│   ├── environments/
│   │   ├── environment.ts                # Development environment
│   │   └── environment.prod.ts           # Production environment
│   ├── styles/
│   │   ├── _variables.scss               # SCSS variables
│   │   └── _mixins.scss                  # SCSS mixins
│   ├── styles.scss                       # Global styles
│   └── main.ts                           # Application entry point
├── angular.json                          # Angular configuration
├── package.json                          # Project dependencies
├── tsconfig.json                         # TypeScript configuration
└── README.md                             # Project documentation
```

## Key Components

### TranslationService

The core service handling API communication. Located in `src/app/services/translation.service.ts`.

```typescript
@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  translate(text: string): Observable<string>
  handleError(error: HttpErrorResponse): Observable<never>
}
```

Key features:
- Error handling with retry logic
- Rate limiting protection
- Response caching
- Type-safe API responses

### AppComponent

The main application component with the following features:

```typescript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true
})
export class AppComponent {
  sourceText: string;
  translatedText: string;
  isLoading: boolean;
  error: string;
}
```

Features:
- Input validation
- Loading state management
- Error display
- Responsive layout

## Styling

### Material Components Used
- `mat-card` for container layout
- `mat-form-field` for input areas
- `mat-button` for actions
- `mat-progress-spinner` for loading states
- `mat-icon` for visual indicators

### SCSS Structure
```scss
// Global variables
$primary-color: #3f51b5;
$accent-color: #ff4081;
$error-color: #f44336;

// Responsive breakpoints
$mobile: 576px;
$tablet: 768px;
$desktop: 992px;
```

### Responsive Design
- Mobile-first approach
- Flexbox layout system
- Dynamic font sizing
- Adaptive spacing

## Error Handling

The application implements comprehensive error handling:

1. **Input Validation**
   - Empty text checking
   - Maximum length validation
   - Special character handling

2. **API Errors**
   - Network failure recovery
   - Rate limit handling
   - Timeout management
   - Invalid response handling

3. **User Feedback**
   - Clear error messages
   - Recovery suggestions
   - Loading indicators
   - Success confirmations

## Testing

Run the test suite:
```bash
# Unit tests
npm run test

# E2E tests
npm run e2e

# Coverage report
npm run test:coverage
```

## Deployment

1. **Build for production:**
```bash
npm run build --prod
```

2. **Environment configuration:**
Update `environment.prod.ts` with production settings.

3. **Static hosting:**
Deploy the contents of `dist/translation-app/` to your hosting provider.

## Future Enhancements

1. **Language Support**
   - Multiple language pairs
   - Auto-language detection
   - Regional variants

2. **User Features**
   - Translation history
   - Favorite translations
   - Export functionality
   - Offline support

3. **Technical Improvements**
   - PWA support
   - Service Worker caching
   - WebSocket real-time updates
   - Speech-to-text integration

4. **UI Enhancements**
   - Dark mode
   - Custom themes
   - Accessibility improvements
   - Keyboard shortcuts

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

### Coding Standards
- Follow Angular style guide
- Write comprehensive tests
- Document new features
- Maintain type safety

## Troubleshooting

Common issues and solutions:

1. **Installation Issues**
   ```bash
   # Clear npm cache
   npm cache clean --force
   # Reinstall dependencies
   rm -rf node_modules
   npm install
   ```

2. **Development Server Issues**
   - Check port availability
   - Verify Node.js version
   - Clear browser cache

3. **API Issues**
   - Verify API endpoint
   - Check rate limits
   - Validate request format

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Angular team for the framework
- MyMemory for the translation API
- Material Design team for UI components
- Open source community for inspiration
