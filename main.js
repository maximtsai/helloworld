
let config = {
    scale: {
        width: 800,
        height: 600,
    },
    scene: {
        create: create,
    },
};

new Phaser.Game(config);

function create ()
{
    let helloWorld = this.add.text(400, 300, 'Hello World', {fontSize: 50});
    helloWorld.setOrigin(0.5, 0.5);
}
