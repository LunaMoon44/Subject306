var roomStatetwo = {
  create: function() {
bg = game.add.sprite(game.world.width,game.world.height -200, 'corridor1');
bg.anchor.setTo(0.5);

subject306 = game.add.sprite(500, 63, 'subject306');
game.physics.arcade.enable(subject306);
subject306.enableBody = true;

key = game.add.sprite(700, 100, 'key');
game.physics.arcade.enable(key);
key.enableBody = true;

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

},

nextroom: function(subject306, door) {
console.log('next');
  game.state.start('roomtwo');
}


};
