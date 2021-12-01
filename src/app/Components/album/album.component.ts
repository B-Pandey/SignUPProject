import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/model/album';
import { AlbumService } from 'src/app/services/album.service';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit {
  myAlbum: Album[] = [];
  constructor(private service: AlbumService) {}

  ngOnInit(): void {
    this.service
      .getAlbumRecord()
      .subscribe((data: Album[]) => (this.myAlbum = data));
  }
}
