import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparateCollectionComponent } from './separate-collection.component';

describe('SeparateCollectionComponent', () => {
  let component: SeparateCollectionComponent;
  let fixture: ComponentFixture<SeparateCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeparateCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeparateCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
