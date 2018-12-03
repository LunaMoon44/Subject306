var menuState = {
  create: function() {
  // title
  bg = game.add.sprite(game.world.width/2,game.world.height/2, 'menu bg');
  bg.anchor.setTo(0.5);

  title = game.add.text(500, 200, 'Subject 306', {font: '50px Orbitron', fill: '#4b6d34'});

// controls
help = game.add.text(100, 450, '', {font:  "Special Elite", fontSize: "30px", fill: '#4b6d34'});
  helpText = 'W A S D keys to move \n';
  helpText += 'enter to select \n';
  helpText += 'p to pick up';
  help.text = helpText;

//button to START
button = game.add.button(game.world.centerX-100, game.world.centerY-50);
button.scale.setTo(6, 2);
//button.anchor.setTo(0.5,0.5);
button.onInputUp.add(this.start); //When the button is clicked, run the start function
text = game.add.text(button.x,button.y,'START', {font: '50px Orbitron', fill: '#548235'});  //Some text for the button with arial font coloured green
//text.anchor.setTo(0.5,0.5);

},
start: function() {
game.state.start('roomOne');

}
};
