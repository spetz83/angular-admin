import { Component, OnInit } from '@angular/core';
import { Tile } from '../../models/tile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tiles: Tile[];
  router: Router;

  constructor(_router: Router) {
    const customersTile: Tile = new Tile('Customers', 'Manage Customers', 'customers');
    const appsTile: Tile = new Tile('Apps', 'Manage Apps', 'apps');
    const usersTile: Tile = new Tile('Users', 'Manage Quantum Users', 'users');
    const authCodesTile: Tile = new Tile('Auth Codes', 'View and create Auth Codes', 'auth-codes');
    const ordersTile: Tile = new Tile('orders', 'View and find orders', 'orders');
    const partsTile: Tile = new Tile('Parts', 'Manage Parts', 'parts');

    this.tiles = [customersTile, appsTile, usersTile, authCodesTile, ordersTile, partsTile];
    this.router = _router;
  }

  ngOnInit() {
  }

  navigate(tile: Tile) {
    this.router.navigate(['/' + tile.route]);
  }

}
