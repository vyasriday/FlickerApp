import { TestBed } from '@angular/core/testing';

import { FlickrImagesService } from './flickr-images.service';

describe('FlickrImagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlickrImagesService = TestBed.get(FlickrImagesService);
    expect(service).toBeTruthy();
  });
});
