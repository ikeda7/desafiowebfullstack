import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSetorComponent } from './form-setor.component';

describe('FormSetorComponent', () => {
  let component: FormSetorComponent;
  let fixture: ComponentFixture<FormSetorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSetorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSetorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
