import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtgalleryComponent } from './artgallery.component';

describe('ArtgalleryComponent', () => {
  let component: ArtgalleryComponent;
  let fixture: ComponentFixture<ArtgalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtgalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtgalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
