var splitStateroom = {

create: function() {
  bg = game.add.sprite(game.world.width -80, game.world.height -160, 'splitroom');
  bg.anchor.setTo(0.5);

  subject306 = game.add.sprite(330, 363, 'subject306');
  game.physics.arcade.enable(subject306);
  subject306.enableBody = true;

  door = game.add.sprite(1090, 420, 'door');
  game.physics.arcade.enable(door);
  door.enableBody = true;
  door.angle = 450;

  door2 = game.add.sprite(1090, 150, 'door');
  game.physics.arcade.enable(door2);
  door2.enableBody = true;
  door2.angle = 450;

  riddle = game.add.sprite(500, 400, 'riddle');
  game.physics.arcade.enable(riddle);
  riddle.enableBody = true;

  game.world.setBounds(250, 31.5, 900, 537);
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

update: function() {
  game.physics.arcade.overlap(subject306, door, this.nextroom, null, this);
  game.physics.arcade.overlap(subject306, riddle, this.riddle, null, this);
  game.physics.arcade.overlap(subject306, door2, this.nextroom2, null, this);

  //player Movements
  if(this.controls.up.isDown){
    subject306.body.velocity.y = -150;
  subject306.animations.play('back');
  }
  else if(this.controls.down.isDown){
    subject306.body.velocity.y = 150;
    subject306.animations.play('forward');
  }

  else if(this.controls.left.isDown){
    subject306.body.velocity.x = -150;
    subject306.animations.play('left');
  }
  else if(this.controls.right.isDown){
    subject306.body.velocity.x = 150;
    subject306.animations.play('right');
  }
  else {
    subject306.body.velocity.y = 0;
    subject306.body.velocity.x = 0;
    subject306.animations.stop();
  }

},

riddle: function(subject306, riddle) {
  riddlebg = game.add.sprite(390,50,'riddlepage');
  riddle = game.add.text(470, 160,'', {font: "Kaushan Script", fontSize: '30px' ,fill: "#000000"});
riddleText = 'the room to the top is the room of strength \n';
riddleText += 'the room on the bottom is the of knowledge';
riddle.text = riddleText;
},

nextroom: function(subject306, door) {
console.log('next');
  game.state.start('knowledgeroom');
},

nextroom2: function(subject306, door2) {
  console.log('bleh');
  game.state.start('strengthroom');
}


};
