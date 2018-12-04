var blankState = {

create: function() {
bg = game.add.sprite(0, 0, 'blackroom');  //The water/blackroom image
Water = game.add.audio('water', 1, true); //The audio for running water
Water.play();

hint = game.add.text(900, 600, 'press enter', {font: "Special Elite", fontSize: "20px", fill: '#FFFFFF'}); //text to help the player

this.controls = game.input.keyboard.addKeys(  //Key Functions
  {
     'up1': Phaser.KeyCode.UP,                //The Up Key
     'down1': Phaser.KeyCode.DOWN,            //The Down Key
     'up2': Phaser.KeyCode.W,                 //The second Up Key
     'down2': Phaser.KeyCode.S,               //The second down key
     'select': Phaser.KeyCode.ENTER         //The Select Key
  }
)


},

update: function() {

if(this.controls.select.isDown){  //If enter is selected go to the next room
game.state.start('forest');
}

}

};
