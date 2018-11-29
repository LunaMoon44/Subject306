var splitStateroom = {

create function:() {
  bg = game.add.sprite(game.world.width/2,game.world.height/2, '');
  bg.anchor.setTo(0.5);



  subject306 = game.add.sprite(500, 63, 'subject306');
  game.physics.arcade.enable(subject306);
  subject306.enableBody = true;

  door = game.add.sprite(530, 539, 'door');
  game.physics.arcade.enable(door);
  door.enableBody = true;

  riddle = game.add.sprite(500, 400, 'riddle');
  riddle.enableBody = true;

  game.world.setBounds(250, 31.5,800, 537);
  subject306.body.collideWorldBounds = true; // want to make it the background bounds
  subject306.body.immovable = true;

  subject306.animations.add('left', [9, 10, 9, 11], 10, true);
  subject306.animations.add('right', [6, 7, 6, 8], 10, true);
  subject306.animations.add('forward', [0, 1, 0, 2], 10, true);
  subject306.animations.add('back', [3, 4, 3, 5], 10, true);
  subject306.animations.add('still front', [0], 1, false);
  subject306.animations.add('still back', [3], 1, false);
  subject306.animations.add('still left', [9], 1, false);
  subject306.animations.add('still right', [6], 1, false);


  //player Movements
  this.controls = game.input.keyboard.addKeys(
    {
      'up': Phaser.KeyCode.W,
      'down': Phaser.KeyCode.S,
      'left': Phaser.KeyCode.A,
      'right': Phaser.KeyCode.D,
      'select': Phaser.KeyCode.ENTER
    }
  )

},

update function:(){

}

};
