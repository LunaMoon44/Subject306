var roomStateOne = {

  create: function() {
  game.add.sprite(250,31.5, 'bg test');

  game.add.sprite(500, 63, 'subject306');

  //player Movements
  this.controls = game.input.keybored.addkeys(
    {
      'up': Phaser.KeyCode.W,
      'down': Phaser.Keycode.S,
      'left': Phaser.Keycode.A,
      'right': Phaser.Keycode.D,
      'select': Phaser.KeyCode.ENTER
    }
  )
  }

};
