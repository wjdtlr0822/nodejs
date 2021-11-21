import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductmanageComponent } from './productmanage.component';

describe('ProductmanageComponent', () => {
  let component: ProductmanageComponent;
  let fixture: ComponentFixture<ProductmanageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductmanageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
