import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleAddUpdateComponent } from './role-add-update.component';

describe('RoleAddUpdateComponent', () => {
  let component: RoleAddUpdateComponent;
  let fixture: ComponentFixture<RoleAddUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleAddUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleAddUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
