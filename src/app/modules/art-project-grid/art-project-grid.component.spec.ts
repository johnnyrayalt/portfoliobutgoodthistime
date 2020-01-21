import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtProjectGridComponent } from './art-project-grid.component';

describe('ArtProjectGridComponent', () => {
  let component: ArtProjectGridComponent;
  let fixture: ComponentFixture<ArtProjectGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtProjectGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtProjectGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
