import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';
import { Photo } from '../../model/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnInit {
  photos: Photo[]=[];
  constructor(private service: PhotosService) {}

  ngOnInit(): void {
    this.service.getPhotos().subscribe((data:Photo[]) => {
      this.photos = data;
      console.log(this.photos)
    });
  }
}
