import { Scene } from 'phaser';

const WIDTH = 1024;
const HEIGHT = 768;

export class Game extends Scene {
    constructor() {
        super('Game');
        this.player = null;
        this.ground = null;
        this.clouds = null;
    }

    preload() {
        this.load.spritesheet("dino", "assets/dino-run.png", {frameWidth: 88, frameHeight: 94});
        this.load.image("ground", "assets/ground.png");
        this.load.image("cloud", "assets/cloud.png");
    }

    create() {
        this.player = this.physics.add.sprite(200, 200, "dino").setOrigin(0);
        this.ground = this.add.image(100, 280, "ground").setOrigin(0);
        this.clouds = this.add.group();

        this.clouds = this.clouds.addMultiple([
            this.add.image(200, 100, "cloud").setOrigin(0),
            this.add.image(300, 130, "cloud").setOrigin(0),
            this.add.image(450, 90, "cloud").setOrigin(0)
        ]);
    }

    update() {
    }

}