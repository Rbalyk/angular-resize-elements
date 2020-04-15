import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragElementDogComponent } from './drag-element-dog.component';

describe('DragElementDogComponent', () => {
  let component: DragElementDogComponent;
  let fixture: ComponentFixture<DragElementDogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragElementDogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragElementDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
