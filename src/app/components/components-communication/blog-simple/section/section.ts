import { Component, computed, inject } from '@angular/core';
import { SectionSignalService } from '../../../../services/section-signal.service';

@Component({
  selector: 'app-section',
  imports: [],
  templateUrl: './section.html',
  styleUrl: './section.scss'
})
export class Section {
  private sectionService = inject(SectionSignalService);
  
  // Computed signals for title and description
  title = computed(() => this.sectionService.section()?.title ?? '');
  description = computed(() => this.sectionService.section()?.description ?? '');
}
