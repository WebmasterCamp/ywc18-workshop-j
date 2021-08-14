import type { NextPage } from "next";
import Image from "next/image";
import Phaser from "phaser";
import { useState, useEffect, useRef } from "react";
import { IonPhaser, GameInstance } from "@ion-phaser/react";

import logo from "../public/phaser-logo.png";

const Tilemap: NextPage = () => {
  const gameRef = useRef<HTMLIonPhaserElement>(null);
  const [game, setGame] = useState<GameInstance>();
  const [initialize, setInitialize] = useState(false);

  const destroy = () => {
    gameRef.current?.destroy();
    setInitialize(false);
    setGame(undefined);
  };

  useEffect(() => {
    if (initialize) {
      class MainScene extends Phaser.Scene {
        private helloWorld!: Phaser.GameObjects.Text;

        preload() {
          this.load.image("tiles", "phaser-example/tiles.png");
          this.load.image("player", "phaser-example/player.png");
          this.load.tilemapCSV("map", "phaser-example/grid.csv");
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
          var tileset = map.addTilesetImage("tiles", undefined, 32, 32, 1, 2);
          var layer = map.createLayer(0, tileset, 0, 0);

          var player = this.add.image(32 + 16, 32 + 16, "player");

          // Left
          this.input.keyboard.on("keydown-LEFT", function (_event: any) {
            var tile = layer.getTileAtWorldXY(player.x - 32, player.y, true);

            if (tile.index === 2) {
              //  Blocked, we can't move
            } else {
              player.x -= 32;
              player.angle = 180;
            }
          });

          //  Right
          this.input.keyboard.on("keydown-RIGHT", function (_event: any) {
            var tile = layer.getTileAtWorldXY(player.x + 32, player.y, true);

            if (tile.index === 2) {
              //  Blocked, we can't move
            } else {
              player.x += 32;
              player.angle = 0;
            }
          });

          //  Up
          this.input.keyboard.on("keydown-UP", function (_event: any) {
            var tile = layer.getTileAtWorldXY(player.x, player.y - 32, true);

            if (tile.index === 2) {
              //  Blocked, we can't move
            } else {
              player.y -= 32;
              player.angle = -90;
            }
          });

          //  Down
          this.input.keyboard.on("keydown-DOWN", function (_event: any) {
            var tile = layer.getTileAtWorldXY(player.x, player.y + 32, true);

            if (tile.index === 2) {
              //  Blocked, we can't move
            } else {
              player.y += 32;
              player.angle = 90;
            }
          });
        }
        update() {}
      }
      const gameConfig: GameInstance = {
        width: "100%",
        height: "100%",
        type: Phaser.AUTO,
        scale: {
          mode: Phaser.Scale.FIT,
          autoCenter: Phaser.Scale.CENTER_BOTH,
          width: "100%",
          height: "100%",
        },
        render: {
          antialias: false,
          pixelArt: true,
          roundPixels: true,
        },
        scene: MainScene,
      };

      setGame(Object.assign({}, gameConfig));
    }
  }, [initialize]);

  return (
    <div className="App">
      <header className="App-header">
        {initialize ? (
          <>
            <IonPhaser ref={gameRef} game={game} initialize={initialize} />
            <div onClick={destroy} className="flex destroyButton">
              <a href="#1" className="bttn">
                Destroy
              </a>
            </div>
          </>
        ) : (
          <>
            <Image src={logo} className="App-logo" alt="logo" />
            <div onClick={() => setInitialize(true)} className="flex">
              <a href="#1" className="bttn">
                Initialize
              </a>
            </div>
          </>
        )}
      </header>
    </div>
  );
};

export default Tilemap;
