import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleAnimComponent } from './sample-anim.component';

describe('SampleAnimComponent', () => {
  let component: SampleAnimComponent;
  let fixture: ComponentFixture<SampleAnimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleAnimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleAnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
