import { Component, OnInit } from '@angular/core';
import { Tile } from '../../models/tile';
import { Router } from '@angular/router';
import { TileService } from '../../services/tile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tiles: Tile[];
  router: Router;

  constructor(private tileService: TileService, _router: Router) {
    this.router = _router;
  }

  ngOnInit() {
    this.tiles = this.tileService.getTiles();
  }

  navigate(tile: Tile) {
    this.router.navigate(['/' + tile.route]);
  }

}
