import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkFromOutsideComponent } from './work-from-outside.component';

describe('WorkFromOutsideComponent', () => {
  let component: WorkFromOutsideComponent;
  let fixture: ComponentFixture<WorkFromOutsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkFromOutsideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkFromOutsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
