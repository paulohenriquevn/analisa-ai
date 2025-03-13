import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar.component';
import { HeroComponent } from './shared/components/hero.component';
import { FeaturesComponent } from './shared/components/features.component';
import { HowItWorksComponent } from './shared/components/how-it-works.component';
import { UploadAreaComponent } from './shared/components/upload-area.component';
import { DataPreviewComponent } from './shared/components/data-preview.component';
import { ButtonComponent } from './shared/components/button.component';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent, 
    HeroComponent, 
    FeaturesComponent, 
    HowItWorksComponent,
    UploadAreaComponent,
    DataPreviewComponent,
    ButtonComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'analisa-ai';
  currentYear = new Date().getFullYear();

  handleFileSelect(file: File): void {
    console.log('File selected:', file.name);
    // In a real app, we would process the file here
  }
}
