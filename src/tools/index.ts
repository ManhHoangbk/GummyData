import { GameData } from "../models/GameData";
import { GameModel } from "../models/GameModel";
import { Item } from "../models/Item";
import { getInfoImage, readFileJson, writeFileJson } from "../utils";

class MainTool{
    idNum = 0;
    gameModel;
    run (){
        this.gameModel  = new GameModel({
            id: this.idNum++,
            gameName: "Game tô chữ cái",
            levelScore: 0,
            tags : [1,2],
              gameType : 0,
              orderIndex: 0,
              createDate: 0,
              parentId: 0,
        });

        let gameData = new GameData({
            id: this.idNum++,
            parentId : this.gameModel.id,
            image: 'alphabet.svg',
            gameType: 0,
        })

        let item = new Item({
            color: "#FFFFFF",
            image: 'alphabet.svg',
            position: {'dx': 100, 'dy': 2},
        })
        gameData.items = [item]
        this.gameModel.gameDatas = [gameData]
        console.log("gameModel ", JSON.stringify(this.gameModel));
        
        return this.gameModel
    }

    readFileJsonData(){
        let data = readFileJson('data.json')
        data.forEach((gameModelJson) =>{
            this.gameModel = new GameModel(gameModelJson)
        })
    }

    format() {
        this.readFileJsonData()
        this.gameModel.gameDatas.forEach((data: GameData) =>{
            if(data.image){
                let imageInfo = getInfoImage(data.image)
                data = Object.assign(data, imageInfo)
            }
            data.items.forEach((item: Item) =>{
                if(item.image){
                    let imageInfo = getInfoImage(item.image)
                    item = Object.assign(item, imageInfo)
                }
            })
        })
        writeFileJson('data2.json', JSON.stringify(this.gameModel))
    }
}

let mainTool = new MainTool();
// mainTool.run()
mainTool.format()