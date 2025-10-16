import { Component, inject, OnInit, signal } from '@angular/core';
import { Section } from '../section/section';
import { PostModel } from '../../../../models/blog';
import { SectionSignalService } from '../../../../services/section-signal.service';

@Component({
  selector: 'app-post',
  imports: [
    Section
  ],
  templateUrl: './post.html',
  styleUrl: './post.scss'
})
export class Post implements OnInit {
  private sectionService = inject(SectionSignalService);
  
  // Signal to track which section is currently active
  currentSectionIndex = signal(0);
  
  post: PostModel = {
    title: 'My Blog Post',
    content: [
      {
        title: 'Introduction',
        description: 'This is the introduction section where we provide an overview of the topic and set the context for the readers.'
      },
      {
        title: 'Main Content',
        description: 'Here we dive deep into the main content, providing detailed information, examples, and practical insights about the subject matter.'
      }
    ]
  };

  ngOnInit(): void {
    // Initialize with the first section
    if (this.post.content.length > 0) {
      this.setCurrentSection(this.post.content[0], 0);
    }
  }

  // Method to set the current section for signal communication
  setCurrentSection(section: any, index: number): void {
    this.sectionService.setSection(section);
    this.currentSectionIndex.set(index);
  }
}
