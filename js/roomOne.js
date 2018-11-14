var roomStateOne = {

  create: function() {
  game.add.sprite(250,31.5, 'bg test');

  subject306 = game.add.sprite(500, 63, 'subject306');
  game.physics.arcade.enable(subject306);
  subject306.body.collideWorldBounds = true; // want to make it the background bounds
  subject306.body.immovable = true;

game.add.sprite(550, 66, 'key');
game.add.sprite(550, 76, 'fakekey');
game.add.sprite(500, 80, 'riddle');

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
}
else if(this.controls.down.isDown){
  subject306.body.velocity.y = 150;
}
else {
  subject306.body.velocity.y = 0;
}
if(this.controls.left.isDown) {
  subject306.body.velocity.x = -150;
}
else if(this.controls.right.isDown){
  subject306.body.velocity.x = 150;
}
else {
  subject306.body.velocity.x = 0;
}
}


};
