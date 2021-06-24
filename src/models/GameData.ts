import { Item } from "./Item";

export class GameData{
      id: number;
	  parentId: number;
	  gameType: number;
    image: string;
    path: string;
    width: number;
    height: number;

      items: any[]

      constructor(object: any = {}){
        this.id = object.id ?? 0;
        this.parentId = object.parentId ?? 0;
        this.gameType = object.gameType ?? 0
        this.image = object.image ?? ''
        this.items = object.items ? object.items.map(item => new Item(item)) : []
      }
}