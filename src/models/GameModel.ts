import { GameData } from "./GameData";

export class GameModel{
    id: number;
	levelScore: number;
    tags : number[];
	gameType : number;
	orderIndex: number;
	createDate: number;
	gameName: string;
	parentId: number;

      gameDatas: any[];

      constructor(object: any = {}){
        this.id = object.id ?? 0;
        this.levelScore = object.levelScore ?? 0;
        this.tags = object.tags ?? [];
        this.gameType = object.gameType ?? 0;
        this.orderIndex = object.orderIndex ?? 0;
        this.gameName = object.gameName ?? "";
        this.parentId = object.parentId ?? 0;
        this.createDate = object.createDate ?? 0;
        this.gameDatas = object.gameDatas ? object.gameDatas.map(data => new GameData(data)) : []
      }
	// private List<GameData> gameDatas = new ArrayList<GameData>();
}