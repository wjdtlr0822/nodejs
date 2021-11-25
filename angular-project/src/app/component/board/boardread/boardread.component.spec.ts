import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardreadComponent } from './boardread.component';

describe('BoardreadComponent', () => {
  let component: BoardreadComponent;
  let fixture: ComponentFixture<BoardreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardreadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
