var roomStateOne = {

  create: function() {

    game.add.sprite(0,0,'White Background');                                      //A Semi-white background beneath the room to make the game seem more appealing

  bg = game.add.sprite(game.world.width/2,game.world.height/2, 'cell room');       //add cell room background and have it half from the world center width and height wise
  bg.anchor.setTo(0.5);

  Soundtrack = game.add.audio('soundtrack', 1, true);
  Soundtrack.play();

  subject306 = game.add.sprite(500, 63, 'subject306');                             //add subject 306
  game.physics.arcade.enable(subject306);                                          //enable physics for subject306
  subject306.enableBody = true;                                                    //make enablebody true

  door = game.add.sprite(550, 539, 'door');                                        //add door sprite
  game.physics.arcade.enable(door);                                                //anable physics
  door.enableBody = true;                                                          //make enable body true

riddle = game.add.sprite(500, 400, 'riddle');                                      //add riddle
game.physics.arcade.enable(riddle);                                                //anable physics
riddle.inputEnabled = true;                                                        //enable input made true
riddle.enableBody = true;                                                          //make enable body true
riddle.events.onInputDown.add(this.listener,this);                                 //have event happen on input is down

  game.world.setBounds(250, 31.5,800, 537);                                        // set world bound (top most left corner is 250, 31.5 and is 800, 537 big)
  subject306.body.collideWorldBounds = true;                                       // want to make subject 306 the background bounds
  subject306.body.immovable = true;                                                //subject 306 can't bouce when hitting the world bound

subject306.animations.add('left', [9, 10, 9, 11], 10, true);                      //add movement with sprite sheet animations (frams 9, 10, 11, speed 10, true)
subject306.animations.add('right', [6, 7, 6, 8], 10, true);                       //add movement with sprite sheet animation (frame 6, 7, 8, speed 10, true)
subject306.animations.add('forward', [0, 1, 0, 2], 10, true);                     //add movement with sprite sheet animation (frame 0, 1, 2, speed 10, true)
subject306.animations.add('back', [3, 4, 3, 5], 10, true);                        //add movement with sprite sheet animation (frame 3, 4, 5, speed, true)
subject306.animations.add('still front', [0], 1, false);                          //idel posistion (frame 0, speed 1, [repeat] false)
subject306.animations.add('still back', [3], 1, false);                           //idel posistion (frame 3, speed 1, false)
subject306.animations.add('still left', [9], 1, false);                           //idle posistion (frame 9, speed 1, false)
subject306.animations.add('still right', [6], 1, false);                          //idel, posistion (frame 6, speed 1, false)


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
game.physics.arcade.overlap(subject306, door, this.nextroom, null, this);        //set a overlap with subject 306 and the door, activate function next room
game.physics.arcade.overlap(subject306, riddle, this.riddle, null, this);        //set a overlap with subject 306 and the riddle, activate function riddle

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
listener: function(riddle) {                                                     //when press ENTER do this

riddlebg.visible = false;                                                        // make the riddle background invisable
riddle.text = '';                                                                //make the riddle text nothing
subject306.x += 50;                                                              // move subject306 to the right by 5px
console.log('touch');

},

riddle: function(subject306, riddle) {

riddlebg = game.add.sprite(250,50,'riddlepage');                                 //add the riddle page background
riddle = game.add.text(470, 160,'', {font: "Kaushan Script", fontSize: '30px' ,fill: "#000000"}); //add text
riddleText = 'Subject 306, \n';                                                  // ''
riddleText += 'welcome to your new home youll \n';                               // ''
riddleText += 'be staying here for a while. \n';                                 // ''
riddleText += 'enjoy your stay. \n';                                             // ''
riddleText += 'P.s dont try and escape, \n';                                     // ''
riddleText += 'no one wants a robot in their world.';                            // ''
riddle.text = riddleText;                                                        // call riddle, riddleText

},

nextroom: function(subject306, door) {
console.log('next');
  game.state.start('roomtwo');                                                   //move to roomtwo
}

};
