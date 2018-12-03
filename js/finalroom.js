var finalroomState = {

create: function() {
bg = game.add.sprite(game.world.width -90, game.world.height -180, 'finalroom');
bg.anchor.setTo(0.5);

subject306 = game.add.sprite(1890, 323, 'subject306');
game.physics.arcade.enable(subject306);
subject306.enableBody = true;

brokenfloor = game.add.sprite(415, 220, 'brokenfloor');
game.physics.arcade.enable(brokenfloor);
brokenfloor.enableBody = true;

spikes = game.add.sprite(1240, 200, 'spikes');
game.physics.arcade.enable(spikes);
spikes.enableBody = true;

spikes1 = game.add.sprite(1240, 400, 'spikes');
game.physics.arcade.enable(spikes1);
spikes1.enableBody = true;

spikes2 = game.add.sprite(1240, 200, 'spikes');
game.physics.arcade.enable(spikes2);
spikes2.enableBody = true;

spikes3 = game.add.sprite(1000, 400, 'spikes');
game.physics.arcade.enable(spikes3);
spikes3.enableBody = true;

spikes4 = game.add.sprite(1240, 530, 'spikes');
game.physics.arcade.enable(spikes4);
spikes4.enableBody = true;

spikes5 = game.add.sprite(800, 200, 'spikes');
game.physics.arcade.enable(spikes5);
spikes5.enableBody = true;

spikes6 = game.add.sprite(800, 400, 'spikes');
game.physics.arcade.enable(spikes6);
spikes6.enableBody = true;

spikes7 = game.add.sprite(800, 530, 'spikes');
game.physics.arcade.enable(spikes7);
spikes7.enableBody = true;

spikes8 = game.add.sprite(660, 200, 'spikes');
game.physics.arcade.enable(spikes8);
spikes8.enableBody = true;

spikes9 = game.add.sprite(1000, 300, 'spikes');
game.physics.arcade.enable(spikes9);
spikes9.enableBody = true;


subject306.animations.add('left', [9, 10, 9, 11], 10, true);
subject306.animations.add('right', [6, 7, 6, 8], 10, true);
subject306.animations.add('forward', [0, 1, 0, 2], 10, true);
subject306.animations.add('back', [3, 4, 3, 5], 10, true);
subject306.animations.add('still front', [0], 1, false);
subject306.animations.add('still back', [3], 1, false);
subject306.animations.add('still left', [9], 1, false);
subject306.animations.add('still right', [6], 1, false);

game.world.setBounds(420, 100, 980, 537);
subject306.body.collideWorldBounds = true; // want to make it the background bounds
subject306.body.immovable = true;


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
  //colitions
  game.physics.arcade.overlap(subject306, brokenfloor, this.nextroom, null, this);
  game.physics.arcade.overlap(subject306, spikes, this.Hit, null, this);
  game.physics.arcade.overlap(subject306, spikes1, this.Hit, null, this);
  game.physics.arcade.overlap(subject306, spikes2, this.Hit, null, this);
  game.physics.arcade.overlap(subject306, spikes3, this.Hit, null, this);
  game.physics.arcade.overlap(subject306, spikes4, this.Hit, null, this);
  game.physics.arcade.overlap(subject306, spikes5, this.Hit, null, this);
  game.physics.arcade.overlap(subject306, spikes6, this.Hit, null, this);
  game.physics.arcade.overlap(subject306, spikes7, this.Hit, null, this);
  game.physics.arcade.overlap(subject306, spikes8, this.Hit, null, this);
  game.physics.arcade.overlap(subject306, spikes9, this.Hit, null, this);

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



  Hit: function(subject306, spikes) {
  subject306.x = 1820;
  subject306.y = 323;
  console.log('hit');
  },

  nextroom: function(subject306, brokenfloor) {
  console.log('next');
    game.state.start('blank');
  }

};
