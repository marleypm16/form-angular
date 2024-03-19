import { ComponentFixture, TestBed } from '@angular/core/testing';

import { selectExtrasForm } from './selectExtrasForm.component';

describe('Form3Component', () => {
  let component: selectExtrasForm;
  let fixture: ComponentFixture<selectExtrasForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [selectExtrasForm]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(selectExtrasForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
