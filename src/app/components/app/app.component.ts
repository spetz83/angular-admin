import { Component, OnInit } from '@angular/core';
import { TileService } from '../../services/tile.service';
import { Tile } from '../../models/tile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Admin';
  tiles: Tile[];

  constructor(private tileService: TileService) {

  }

  ngOnInit() {
    this.tiles = this.tileService.getTiles();
  }
}
