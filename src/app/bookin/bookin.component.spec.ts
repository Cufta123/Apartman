import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookinComponent } from './bookin.component';

describe('BookinComponent', () => {
  let component: BookinComponent;
  let fixture: ComponentFixture<BookinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
