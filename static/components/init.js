class Game {
    app;

    constructor(htmlDOM) {
        this.start(htmlDOM);
    }

    start = element => {
        this.app = new PIXI.Application({
            view: element,
            width: window.innerWidth,
            height: window.innerHeight,
            backgroundColor: 0xffffff,
        });
    };

    addOnStage(object) {
        this.app.stage.addChild(object);
    }
}

class Player {
    createPlayer(positionX, positionY) {
        const player = PIXI.Sprite.from("../assets/sprites/player.png");

        player.anchor.set(0.5);
        player.x = positionX;
        player.y = positionY;

        return player;
    }
}

function main() {
    const HTML_DOM = document.getElementById("game");

    const game = new Game(HTML_DOM);
    const player = new Player();
    const centerPositionX = game.app.renderer.width / 2;
    const centerPositionY = game.app.renderer.height / 2;

    const hero = player.createPlayer(centerPositionX, centerPositionY);

    game.addOnStage(hero);
}

main();
