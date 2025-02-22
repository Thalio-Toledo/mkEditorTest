import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Editor, NgxEditorModule } from 'ngx-editor';
import { CommonModule } from '@angular/common';
import { MarkdownViwerComponent  } from '../markdown-viwer/markdown-viwer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgxEditorModule, CommonModule, MarkdownViwerComponent],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent{
  markdownText: string = '';
  tagHtml : string = 'p'
  
  @ViewChild('editor') editorRef!: ElementRef;
  showMenu = false;
  menuOptions = [
    { label: 'Título 1', markdown: 'h1' },
    { label: 'Título 2', markdown: 'h2' },
    { label: 'bold', markdown: 'b' },
    { label: 'Lista', markdown: 'li' },
    { label: 'Código', markdown: '```' },
    { label: 'Citação', markdown: '> ' }
  ];
  selectedIndex = 0;

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (event.key === 'ArrowDown') {
      this.selectedIndex = (this.selectedIndex + 1) % this.menuOptions.length;
    } else if (event.key === 'ArrowUp') {
      this.selectedIndex = (this.selectedIndex - 1 + this.menuOptions.length) % this.menuOptions.length;
    } else if (event.key === 'Enter' && this.showMenu) {
      event.preventDefault();
      this.tagHtml = this.menuOptions[this.selectedIndex].markdown
      this.applyMarkdown(this.menuOptions[this.selectedIndex].markdown);
      this.toMarkdown("Digite seu texto",this.menuOptions[this.selectedIndex].markdown)
    }
  }

  onInput(event: any) {
    //const text = event.target.innerText;
    const text = event.data
    if (text.endsWith('/')) {
      this.showMenu = true;
    } else {
      this.showMenu = false;
      this.texto = this.toHTML("Digite seu texto", this.tagHtml);
    }


  }
 texto:string = ""
  applyMarkdown(markdown: string) {
    this.showMenu = false;
    const editor = this.editorRef.nativeElement;
    //editor.innerText = editor.innerText.replace('/', markdown);
    editor.innerText = editor.innerText.replace('/', "");
    this.texto =  this.toHTML("Digite seu texto",markdown);
    editor.focus();
  }

  editorContent = '';


  toHTML(text : string, tag:string = 'p'){
    return `<${tag}>${text}</${tag}>`
  }

  toMarkdown(text : string ='Digite um texto' , tag: string = "#"){
    return `${tag} ${text}`
  }

  editorContent2 = ''; // Armazena o conteúdo do div

  onInput2(event: Event) {
    this.editorContent = (event.target as HTMLElement).innerText;
  }
}
