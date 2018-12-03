var roomStatetwo = {
  create: function() {

    game.add.sprite(0,0,'White Background');                                      //A Semi-white background beneath the room to make the game seem more appealing


bg = game.add.sprite(game.world.width +100, game.world.height -150, 'dungonone'); //add dungonone sprite
bg.anchor.setTo(0.5);                                                            //anchor background

subject306 = game.add.sprite(450, 163, 'subject306');                            //add sprite subject306
game.physics.arcade.enable(subject306);                                          //enable physics
subject306.enableBody = true;                                                    //make enable body true

door = game.add.sprite(1370, 350, 'door');                                       //add door sprite
game.physics.arcade.enable(door);                                                //enable physics '1'
door.enableBody = true;                                                          //make anable body true '2'
door.angle = 90;                                                                 //set angle to 90*

spikes = game.add.sprite(700, 300, 'spikes');                                    //spike sprite
game.physics.arcade.enable(spikes);                                              // '1'
spikes.enableBody = true;                                                        // '2'

spikes1 = game.add.sprite(880, 230, 'spikes');                                   // spike sprite
game.physics.arcade.enable(spikes1);                                             // '1'
spikes1.enableBody = true;                                                       // '2'

spikes2 = game.add.sprite(700, 430, 'spikes');                                   // spike sprite
game.physics.arcade.enable(spikes2);                                             //'1'
spikes2.enableBody = true;                                                       //'2'

spikes3 = game.add.sprite(900, 530, 'spikes');                                   //spike sprite
game.physics.arcade.enable(spikes3);                                             // '1'
spikes3.enableBody = true;                                                       //'2'


subject306.animations.add('left', [9, 10, 9, 11], 10, true);                      //add movement with sprite sheet animations (frams 9, 10, 11, speed 10, true)
subject306.animations.add('right', [6, 7, 6, 8], 10, true);                       //add movement with sprite sheet animation (frame 6, 7, 8, speed 10, true)
subject306.animations.add('forward', [0, 1, 0, 2], 10, true);                     //add movement with sprite sheet animation (frame 0, 1, 2, speed 10, true)
subject306.animations.add('back', [3, 4, 3, 5], 10, true);                        //add movement with sprite sheet animation (frame 3, 4, 5, speed, true)
subject306.animations.add('still front', [0], 1, false);                          //idel posistion (frame 0, speed 1, [repeat] false)
subject306.animations.add('still back', [3], 1, false);                           //idel posistion (frame 3, speed 1, false)
subject306.animations.add('still left', [9], 1, false);                           //idle posistion (frame 9, speed 1, false)
subject306.animations.add('still right', [6], 1, false);                          //idel, posistion (frame 6, speed 1, false)


game.world.setBounds(420, 100, 980, 537);                                        // set world bound
subject306.body.collideWorldBounds = true;                                       // want to make it the background bounds
subject306.body.immovable = true;                                                //subject306 wont bounce when hitting world bound


  //player Movements
  this.controls = game.input.keyboard.addKeys(
    {
      'up': Phaser.KeyCode.W,                                                     // key set to up
      'down': Phaser.KeyCode.S,                                                   // key set to down
      'left': Phaser.KeyCode.A,                                                   //key set to left
      'right': Phaser.KeyCode.D,                                                  //key set to right
      'select': Phaser.KeyCode.ENTER                                              //key set to select
    }
  )

  },

  update: function() {
//colitions
game.physics.arcade.overlap(subject306, door, this.nextroom, null, this);        //overlap function with subject306 and door, activate function next room
game.physics.arcade.overlap(subject306, spikes, this.Hit, null, this);           //overlap function with subject306 and spikes, activate function hit
game.physics.arcade.overlap(subject306, spikes1, this.Hit, null, this);          //overlap function with subject306 and spikes, activate function hit
game.physics.arcade.overlap(subject306, spikes2, this.Hit, null, this);          //overlap function with subject306 and spikes, activate function hit
game.physics.arcade.overlap(subject306, spikes3, this.Hit, null, this);          //overlap function with subject306 and spikes, activate function hit

    //player Movements
    if(this.controls.up.isDown){                                                     //function when pressing up (W)
      subject306.body.velocity.y = -150;                                             // ''
    subject306.animations.play('back');                                              // ''
    }
    else if(this.controls.down.isDown){                                              //function when press down (S)
      subject306.body.velocity.y = 150;                                              // ''
      subject306.animations.play('forward');                                         // ''
    }

    else if(this.controls.left.isDown){                                              //function when press left (A)
      subject306.body.velocity.x = -150;                                             //
      subject306.animations.play('left');                                            //
    }
    else if(this.controls.right.isDown){                                             //function when press Right (D)
      subject306.body.velocity.x = 150;                                              // ''
      subject306.animations.play('right');                                           // ''
    }
    else {                                                                           //function when nothing is pressed
      subject306.body.velocity.y = 0;                                                // ''
      subject306.body.velocity.x = 0;                                                // ''
      subject306.animations.stop();                                                  // ''
    }

  },



Hit: function(subject306, spikes) {
subject306.x = 450;                                                              //move subject306 to those cowardanace
subject306.y = 163;                                                              // ''
console.log('hit');
},

nextroom: function(subject306, door) {
console.log('next');
  game.state.start('library');                                                   //move on to libary
}


};
