import { Component, Input } from '@angular/core';
import { MarkdownModule ,provideMarkdown} from 'ngx-markdown';

@Component({
  selector: 'app-markdown-viwer',
  standalone: true,
  imports: [MarkdownModule],
  providers:[provideMarkdown()],
  templateUrl: './markdown-viwer.component.html',
  styleUrl: './markdown-viwer.component.less'
})
export class MarkdownViwerComponent {
  @Input() content: string = ''; // Recebe o Markdown
}
