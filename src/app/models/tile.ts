export class Tile {
  name: string;
  description: string;
  route: string;

  constructor(name: string, description: string, route: string) {
    this.name = name;
    this.description = description;
    this.route = route;
  }
}
