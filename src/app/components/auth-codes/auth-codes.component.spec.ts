import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthCodesComponent } from './auth-codes.component';

describe('AuthCodesComponent', () => {
  let component: AuthCodesComponent;
  let fixture: ComponentFixture<AuthCodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthCodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
