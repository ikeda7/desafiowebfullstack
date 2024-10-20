import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSetorComponent } from './list-setor.component';

describe('ListSetorComponent', () => {
  let component: ListSetorComponent;
  let fixture: ComponentFixture<ListSetorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListSetorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSetorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
