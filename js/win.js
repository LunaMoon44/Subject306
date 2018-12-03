var winState = {
create: function() {

  bg = game.add.sprite(game.world.width/2,game.world.height/2, 'menu bg');
  bg.anchor.setTo(0.5);

win = game.add.text(500, 200, '', {font: '40px Orbitron', fill: '#000711'});
winText = 'Well done, you escaped \n';
winText += 'Try escaping from another route \n';
winText += 'Besides, we will catch you again';
win.text = winText;

button = game.add.button(game.world.centerX, game.world.centerY+150);
button.scale.setTo(6, 2);
//button.anchor.setTo(0.5,0.5);
button.onInputUp.add(this.restart); //When the button is clicked, run the start function
text = game.add.text(button.x,button.y,'MENU', {font: '50px Orbitron', fill: '#000711'});  //Some text for the button with arial font coloured green
//text.anchor.setTo(0.5,0.5);

},

restart: function () {                                                                        //stop playing the win sound
  game.state.start('menu');                                                               //go to the menu state
}


};
