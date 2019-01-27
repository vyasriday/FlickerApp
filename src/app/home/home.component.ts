import { Component, OnInit } from '@angular/core';
import { FlickrImagesService } from '../flickr-images.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images: any[] = [];
  p = 1;

  constructor(private flickr: FlickrImagesService) { }

  ngOnInit() {
    this.flickr.fetchImages()
      .subscribe(data => this.images = data);
  }
}
