import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtfomComponent } from './artfom.component';

describe('ArtfomComponent', () => {
  let component: ArtfomComponent;
  let fixture: ComponentFixture<ArtfomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtfomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtfomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
