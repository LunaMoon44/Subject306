var menuState = {
  create: function() {
  // title

  title = game.add.text(game.world.centerX, game.world.centerY, 'Subject 306', {font: '50px Liquid Crystal', fill: '#93FE20'});

// controls
help = game.add.text(0, 510, '', {font:  "Ink Free", fontSize: "30px", fill: '#93FE20'});
  helpText = 'W A S D keys to move \n';
  helpText = 'enter to select \n';
  helpText = 'p to pick up';

//button to START
button = game.add.button(game.world.centerX, game.world.centerY);
button.anchor.setTo(0.5,0.5);
button.onInputUp.add(this.start); //When the button is clicked, run the start function
text = game.add.text(button.x,button.y,'START', {font: '50px Arial', fill: '#00ff00'});  //Some text for the button with arial font coloured green
text.anchor.setTo(0.5,0.5);

},
start: function() {
game.state.start('room1');

},
};
