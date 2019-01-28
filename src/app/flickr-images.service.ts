import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/internal/observable/of';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FlickrImagesService {

  // tslint:disable-next-line:max-line-length
  url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=373055aac8741a01f1cde294b0cfbbda&tags=food&content_type=1&extras=description&per_page=200&page=2&format=json&nojsoncallback=1&auth_token=72157678163179018-c51c00a6a6e4b2cd&api_sig=fe75a5b72a53441f835a276e4eede23d`;

  constructor(private http: HttpClient) { }

  imagesSource: any[];

  fetchImages() {
    if (!this.imagesSource) {
    return this.http.get(this.url)
      .pipe(
        map((data => {
          console.log(data);
          return data['photos'].photo;
        })),
        map(images => {
          console.log(images);
          this.imagesSource =  images.map((image) => {
            return {
              id: image.id,
              title: image.title,
              imageUrl: `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`,
              description: image.description._content,
              rating: 0
            };
          });
          return this.imagesSource;
        })
      );
    } else {
      return of(this.imagesSource);
    }

  }

  getImage(id: string) {
    return this.imagesSource.find(image => {
      return image.id === id;
    });
  }

  updateImage(id: string, rating: number) {
    this.imagesSource = this.imagesSource.map((image) => {
      if (image.id === id) {
        image.rating = rating;
        return image;
      }
      return image;
    });
  }

}


