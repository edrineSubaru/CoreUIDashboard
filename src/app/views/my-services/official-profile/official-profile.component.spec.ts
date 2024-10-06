import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficialProfileComponent } from './official-profile.component';

describe('OfficialProfileComponent', () => {
  let component: OfficialProfileComponent;
  let fixture: ComponentFixture<OfficialProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficialProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficialProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
