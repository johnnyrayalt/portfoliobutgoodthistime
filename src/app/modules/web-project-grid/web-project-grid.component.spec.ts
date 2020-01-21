import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebProjectGridComponent } from './web-project-grid.component';

describe('WebProjectGridComponent', () => {
  let component: WebProjectGridComponent;
  let fixture: ComponentFixture<WebProjectGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebProjectGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebProjectGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
