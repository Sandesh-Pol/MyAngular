import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgesDynamicComponent } from './imges-dynamic.component';

describe('ImgesDynamicComponent', () => {
  let component: ImgesDynamicComponent;
  let fixture: ComponentFixture<ImgesDynamicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImgesDynamicComponent]
    });
    fixture = TestBed.createComponent(ImgesDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
