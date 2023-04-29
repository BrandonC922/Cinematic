class Intro extends Phaser.Scene 
{
    constructor() {
        super({key: 'Intro'});
    }
    preload(){
        this.load.path = "./assests/";
        this.load.audio('LogoM', ['LogoMusic.wav']);
        this.load.image("BCSTUDIOS", "BCSTUDIOS.png");
        console.log("finish preload");
    }
    create()
    {

        var sound = this.sound.add('LogoM');
        sound.play();

        this.input.once('pointerdown', function ()
        {
            this.cameras.main.once('camerafadeincomplete', function (camera) {
                camera.fadeOut(6000);
            });
            

            console.log('From SceneD to SceneE');

            this.scene.start('sceneA')

        }, this);

        this.cameras.main.fadeIn(6000);


    }
}




class SceneA extends Phaser.Scene 
{
    constructor() {
        super({key: 'sceneA'});
    }
    preload(){
        this.load.path = "./assests/";
        this.load.audio('MainTheme', ['MainTheme.wav']);
        this.load.image("BCSTUDIOS", "BCSTUDIOS.png");
        console.log("finish preload");
    }
    create()
    {

        var theme = this.sound.add('MainTheme');
        theme.play();
        
        
        this.add.sprite(800, 450, 'BCSTUDIOS');

        

        this.input.once('pointerdown', function ()
        {

            console.log('From SceneA to SceneB');

            this.scene.start('sceneB');

        }, this);

        this.cameras.main.once('camerafadeincomplete', function (camera) {
            camera.fadeOut(6000);
        });

        this.cameras.main.fadeIn(6000);

        

    }
}

        
class SceneB extends Phaser.Scene
{
    constructor(){
        super({ key: 'sceneB' });
    }
    preload(){
        this.load.path = "./assests/";
        this.load.image("Bow", "FloatingBow.png");
        console.log("finish preload");
    }
    create()
    {

        var bowtexttwo = this.textObject = this.add.text(
            0, //x
            600,//y
            "With immeasurable Power",
            {
                font: "40px Arial",
                color: "#ff7700",
            }, //style
        );

        var bowtext =this.textObject = this.add.text(
            0, //x
            0,//y
            "A bow", //text
            {
                font: "40px Arial",
                color: "#ff7700",
            }, //style
        );

        var bowpic = this.add.sprite(800, 350, 'Bow');

        bowpic.displayWidth = 800;
            //scale evenly
        bowpic.scaleY = bowpic.scaleX;

        this.input.once('pointerdown', function ()
        {

            console.log('From SceneB to SceneC');

            this.scene.start('sceneC');

        }, this);


        this.cameras.main.fadeIn(6000);

        this.tweens.add({
            targets: bowtext,
            x: 700,
            duration: 5000,
            hold: 500,
            repeatDelay: 500,
            ease: 'cubic.out'
        });
        
        this.tweens.add({
            targets: bowtexttwo,
            x: 600,
            duration: 5000,
            hold: 500,
            repeatDelay: 500,
            ease: 'cubic.out'
        })

    }
    

}

class SceneC extends Phaser.Scene
{
    constructor(){
        super({ key: 'sceneC' });
    }
    preload(){
        this.load.path = "./assests/";
        this.load.image("Hands", "Hands.png");
        console.log("finish preload");
    }
    create()
    {
        var HandTextOne = this.textObject = this.add.text(
            700, //x
            600,//y
            "With One Shot",
            {
                font: "40px Arial",
                color: "#ff7700",
            }, //style
        );

        var HandTextTWO =this.textObject = this.add.text(
            700, //x
            0,//y
            "A Dying Man", //text
            {
                font: "40px Arial",
                color: "#ff7700",
            }, //style
        );


        var hands = this.add.sprite(800, 350, 'Hands');

        hands.displayWidth = 800;
            //scale evenly
        hands.scaleY = hands.scaleX;

        




        this.input.once('pointerdown', function ()
        {
            this.cameras.main.once('camerafadeincomplete', function (camera) {
                camera.fadeOut(6000);
            });
            

            console.log('From SceneC to SceneD');

            this.scene.start('sceneD')

        }, this);

        this.cameras.main.fadeIn(6000);


        

    }
    

}

class SceneD extends Phaser.Scene
{
    constructor(){
        super({ key: 'sceneD' });
    }
    preload(){
        this.load.path = "./assests/";
        this.load.image("Hands", "Hands.png");
        console.log("finish preload");
    }
    create()
    {
        this.textObject = this.add.text(
            600, //x
            300,//y
            "To Set Things Right", //text
            {
                font: "40px Arial",
                color: "#ff7700",
            }, //style
        );
        
        this.input.once('pointerdown', function ()
        {
            this.cameras.main.once('camerafadeincomplete', function (camera) {
                camera.fadeOut(6000);
            });
            

            console.log('From SceneB to SceneC');

            this.scene.start('SceneE')

        }, this);

        this.cameras.main.fadeIn(6000);

        

    }
}

class SceneE extends Phaser.Scene
{
    constructor(){
        super({ key: 'SceneE' });
    }
    preload(){
        this.load.path = "./assests/";
        this.load.image("Hero", "Hero.png");
        this.load.image("RedEyes","RedEyes.png")
        console.log("finish preload");
    }
    create()
    {
        this.textObject = this.add.text(
            0, //x
            525,//y
            "Play \nOptions\nCredits\nExit", //text
            {
                font: "40px Arial",
                color: "#ff7700",
            }, //style
        );
    
 
        var HeroPic = this.add.sprite(800, 450, 'Hero');

        HeroPic.displayWidth = 800;
            //scale evenly
        HeroPic.scaleY = HeroPic.scaleX;

        var Villain = this.add.sprite(800,150, "RedEyes")

        Villain.displayWidth = 400;
        Villain.scaleY = Villain.scaleX;

        this.graphics = this.add.graphics();

        this.graphics.fillStyle(0x000000, 1); //color, opacity
        const Wee = this.graphics.fillRect(0,500,200,200);

        this.graphics.fillStyle(0x000000, 1); //color, opacity
        const box = this.graphics.fillRect(600,100,600,900); 

        this.tweens.add({
            targets: box,
            y: 700,
            duration: 4000,
            hold: 500,
            repeatDelay: 500,
            ease: 'cubic.in'

            
        });
        

        this.input.once('pointerdown', function ()
        {
            this.cameras.main.once('camerafadeincomplete', function (camera) {
                camera.fadeOut(6000);
            });
            

            console.log('From SceneD to SceneE');

            this.scene.start('SceneA')

        }, this);

        this.cameras.main.fadeIn(6000);

        

    }
}


let config = {
    type: Phaser.WEBGL,
    width: 1600,
    height: 900,
    background: 0xFFFFFF,
    scene: [Intro, SceneA, SceneB, SceneC, SceneD, SceneE],
}

let game = new Phaser.Game(config);