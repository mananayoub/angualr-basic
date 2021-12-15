import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingDataComponent } from './heading-data.component';

describe('HeadingDataComponent', () => {
  let component: HeadingDataComponent;
  let fixture: ComponentFixture<HeadingDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadingDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
