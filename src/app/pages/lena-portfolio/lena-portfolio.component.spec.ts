import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LenaPortfolioComponent } from './lena-portfolio.component';

describe('LenaPortfolioComponent', () => {
  let component: LenaPortfolioComponent;
  let fixture: ComponentFixture<LenaPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LenaPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LenaPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
