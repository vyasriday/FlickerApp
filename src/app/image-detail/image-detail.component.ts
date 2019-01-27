import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlickrImagesService } from '../flickr-images.service';
import { Review, Image } from '../client.interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private flickr: FlickrImagesService,
    private router: Router
    ) {}

  image: Image = <Image>{};
  reviewData: Review = <Review>{};
  imageId: string;

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.imageId = params['id'];
        this.image = this.flickr.getImage(this.imageId);
      });
  }

  submitReview(rate: number) {
    this.flickr.updateImage(this.image.id, rate );
    this.router.navigateByUrl('/home');
  }

  validateData(reviewData) {
    // tslint:disable-next-line:max-line-length
    if (reviewData.createdBy && reviewData.reviewReason) {
      if (reviewData.rating > 0 && reviewData.rating <= 10) {
        return true;
      }
      return false;
    } else {
      return false;
    }
  }

}
