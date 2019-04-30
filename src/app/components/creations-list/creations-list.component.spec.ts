import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationsListComponent } from './creations-list.component';

describe('CreationsListComponent', () => {
  let component: CreationsListComponent;
  let fixture: ComponentFixture<CreationsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
