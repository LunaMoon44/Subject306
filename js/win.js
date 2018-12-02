var winState = {
create: function() {



win = game.add.text(500, 200, '', {font: '40px Orbitron', fill: '#93FE20'});
winText = 'Well done, you escaped \n';
winText += 'try escaping from another route \n';
winText += 'besides, we will catch you again';
win.text = winText;

  button = game.add.button(game.world.centerX, game.world.centerY+250, 'button');           //add button sprite, coordinates world's center (X), World's center +250px (Y)
  button.anchor.setTo(0.5,0.5);                                                             //button is anchored to 0.5 (X), 0.5 (Y)
  button.onInputUp.add(this.restart);                                                       //When the button is clicked, run the 'restart' function
  text = game.add.text(button.x,button.y,'PLAY AGAIN');                                     // add text that says 'play again' at the buttons Coordinance
  text.anchor.setTo(0.5,0.5);                                                               // set the text anchor to 0.5 (X), 0.5 (Y)

},

restart: function () {                                                                        //stop playing the win sound
  game.state.start('menu');                                                               //go to the menu state
}


};
