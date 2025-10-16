import { Injectable, signal } from '@angular/core';
import { Section } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class SectionSignalService {
  private currentSection = signal<Section | null>(null);

  // Read-only signal for components to subscribe to
  readonly section = this.currentSection.asReadonly();

  // Method to update the current section
  setSection(section: Section): void {
    this.currentSection.set(section);
  }

  // Method to clear the current section
  clearSection(): void {
    this.currentSection.set(null);
  }
}