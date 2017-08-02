export class Tile {
  name: string;
  description: string;
  route: string;
  icon: string;

  constructor(name: string, description: string, route: string, icon: string) {
    this.name = name;
    this.description = description;
    this.route = route;
    this.icon = icon;
  }
}
