import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResignationRequestComponent } from './resignation-request.component';

describe('ResignationRequestComponent', () => {
  let component: ResignationRequestComponent;
  let fixture: ComponentFixture<ResignationRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResignationRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResignationRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
