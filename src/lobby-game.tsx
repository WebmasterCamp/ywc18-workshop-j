import type { NextPage } from "next";
import Phaser from "phaser";
import { useState, useRef } from "react";
import { IonPhaser, GameInstance } from "@ion-phaser/react";

const isBlocked = (tile: Phaser.Tilemaps.Tile) => {
  return !tile || (tile.index >= 5 && tile.index <= 8);
};

const Tilemap: NextPage = () => {
  const gameRef = useRef<HTMLIonPhaserElement>(null);
  const [initialize] = useState(true);

  class MainScene extends Phaser.Scene {
    preload() {
      this.load.image("tiles", "/lobby/tiles.png");
      this.load.image("player", "/characters/singer.png");
      this.load.tilemapCSV("map", "/lobby/grid.csv");
    }

    init() {
      this.cameras.main.setBackgroundColor("#24252A");
    }

    create() {
      var map = this.make.tilemap({
        key: "map",
        tileWidth: 32,
        tileHeight: 32,
      });
      // var tileset = map.addTilesetImage("tiles", undefined, 32, 32, 1, 0);
      var tileset = map.addTilesetImage("tiles");
      var layer = map.createLayer(0, tileset, 0, 0);

      var player = this.add.image(32 * 11 + 16, 32 * 11 + 16, "player");

      // Left
      this.input.keyboard.on("keydown-LEFT", function (_event: any) {
        var tile = layer.getTileAtWorldXY(player.x - 32, player.y, true);

        if (isBlocked(tile)) {
          //  Blocked, we can't move
          return;
        }
        player.x -= 32;
        // player.angle = 180;
      });

      //  Right
      this.input.keyboard.on("keydown-RIGHT", function (_event: any) {
        var tile = layer.getTileAtWorldXY(player.x + 32, player.y, true);

        if (isBlocked(tile)) {
          //  Blocked, we can't move
          return;
        }
        player.x += 32;
        // player.angle = 0;
      });

      //  Up
      this.input.keyboard.on("keydown-UP", function (_event: any) {
        var tile = layer.getTileAtWorldXY(player.x, player.y - 32, true);

        if (isBlocked(tile)) {
          //  Blocked, we can't move
          return;
        }
        player.y -= 32;
        // player.angle = -90;
      });

      //  Down
      this.input.keyboard.on("keydown-DOWN", function (_event: any) {
        var tile = layer.getTileAtWorldXY(player.x, player.y + 32, true);

        if (isBlocked(tile)) {
          //  Blocked, we can't move
          return;
        }
        player.y += 32;
        // player.angle = 90;
      });
    }
    update() {}
  }
  const game: GameInstance = {
    // width: Math.floor(width * 0.6),
    // height: Math.floor(height * 0.6),
    type: Phaser.AUTO,
    scale: {
      // mode: Phaser.Scale.FIT,
      mode: Phaser.Scale.RESIZE,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      width: "100%",
      height: "80%",
    },
    render: {
      antialias: false,
      pixelArt: true,
      roundPixels: true,
    },
    scene: MainScene,
  };

  return <IonPhaser ref={gameRef} game={game} initialize={initialize} />;
};

export default Tilemap;
