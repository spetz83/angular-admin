import { Injectable } from '@angular/core';
import { Tile } from '../models/tile';

@Injectable()
export class TileService {

  constructor() { }

  getTiles(): Tile[] {
    const customersTile: Tile = new Tile('Customers', 'Manage Customers', 'customers', 'face');
    const appsTile: Tile = new Tile('Apps', 'Manage Apps', 'apps', 'extension');
    const usersTile: Tile = new Tile('Users', 'Manage Quantum Users', 'users', 'android');
    const authCodesTile: Tile = new Tile('Auth Codes', 'View and create Auth Codes', 'auth-codes', 'assignment');
    const ordersTile: Tile = new Tile('Orders', 'View and find orders', 'orders', 'business');
    const partsTile: Tile = new Tile('Parts', 'Manage Parts', 'parts', 'devices other');

    const tiles = [customersTile, appsTile, usersTile, authCodesTile, ordersTile, partsTile];

    return tiles;
  }
}
