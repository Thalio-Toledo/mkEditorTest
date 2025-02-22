import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownViwerComponent } from './markdown-viwer.component';

describe('MarkdownViwerComponent', () => {
  let component: MarkdownViwerComponent;
  let fixture: ComponentFixture<MarkdownViwerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarkdownViwerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkdownViwerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
