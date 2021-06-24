export class Position{
    key: string;
    value: number;
}

export class Item{
      image: string;
	  path: string;
      position: any;
	  color: string;
	  canDraw: string;
	  width: number;
	  height: number;
	  groupId: number;

      constructor(object: any ={}){
          this.image = object.image ?? ''
          this.path = object.path
          this.position = object.position
          this.color = object.color
          this.canDraw = object.canDraw
          this.width = object.width
          this.height = object.height
          this.groupId = object.groupId
      }
}