import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskImageComponent } from './mask-image.component';

describe('MaskImageComponent', () => {
  let component: MaskImageComponent;
  let fixture: ComponentFixture<MaskImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaskImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaskImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
