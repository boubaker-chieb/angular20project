import { Component } from '@angular/core';
import { Section } from '../section/section';
import { PostModel } from '../../../../models/blog';

@Component({
  selector: 'app-post',
  imports: [
    Section
  ],
  templateUrl: './post.html',
  styleUrl: './post.scss'
})
export class Post {
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
}
