var blankState = {

create: function() {
bg = game.add.sprite(0, 0, 'blackroom');
Water = game.add.audio('Water', 1, true);
Water.play();

hint = game.add.text(900, 600, 'press enter', {font: "Special Elite", fontSize: "20px", fill: '#FFFFFF'});

this.controls = game.input.keyboard.addKeys(  //adding perpouse for keys
  {
     'up1': Phaser.KeyCode.UP,                //the UP key is now 'up1'
     'down1': Phaser.KeyCode.DOWN,            //the DOWN key is now 'down1'
     'up2': Phaser.KeyCode.W,                 //the W key is now 'up2'
     'down2': Phaser.KeyCode.S,               //the S key is now 'down2'
     'select': Phaser.KeyCode.ENTER         //the ENTER is now 'select'
  }
)


},

update: function() {

if(this.controls.select.isDown){
game.state.start('forest');
}

}

};
