import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragElementCatComponent } from './drag-element-cat.component';

describe('DragElementCatComponent', () => {
  let component: DragElementCatComponent;
  let fixture: ComponentFixture<DragElementCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragElementCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragElementCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
