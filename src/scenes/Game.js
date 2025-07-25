import { Scene } from 'phaser';

const WIDTH = 1024;
const HEIGHT = 768;

export class Game extends Scene {
    constructor() {
        super('Game');
        this.player = null;
    }

    preload() {
        this.load.image("dino", "assets/dino-idle.png");
    }

    create() {
        this.add.image(200, 200, "dino")
            .setOrigin(0);
    }

    update() {
    }

}