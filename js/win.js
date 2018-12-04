var winState = {
create: function() {

  bg = game.add.sprite(game.world.width,game.world.height -202, 'menu bg');  //add the munu background
  bg.anchor.setTo(0.5);

win = game.add.text(500, 200, '', {font: '40px Orbitron', fill: '#000711'}); // win text added
winText = 'Well done, you escaped \n';
winText += 'Try escaping from another route \n';
winText += 'Besides, we will catch you again';
win.text = winText;

button = game.add.button(game.world.centerX, game.world.centerY+150); //add button
button.scale.setTo(6, 2);
//button.anchor.setTo(0.5,0.5);
button.onInputUp.add(this.restart); //When the button is clicked, run the start function
text = game.add.text(button.x,button.y,'MENU', {font: '50px Orbitron', fill: '#000711'});  //Some text for the button with arial font coloured green
//text.anchor.setTo(0.5,0.5);

credit = game.add.text(500, 60, '', {font: '20px Orbitron', fill: '#000711'}); //credits for music
creditText = 'Audio Credits: \n';
creditText += 'Dungeon Audio \n';
creditText += 'The View by Pyrosion - https://soundcloud.com/pyrosion - Creative Commons — Attribution-ShareAlike 3.0 Unported — CC BY-SA 3.0 - http://creativecommons.org/licenses/by-sa/3.0/ - Music promoted by Audio Library https://youtu.be/twPg_hoYDkY\n';
creditText += 'Forest Audio \n';
creditText += 'https://freesound.org/people/gregswinford/sounds/70100/ - https://freesound.org/people/PhilllChabbb/sounds/245834/ - https://freesound.org/people/bajko/sounds/385279/';
credit.text = creditText;

},

restart: function () {                                                                     
  game.state.start('menu');                                                               //go to the menu state
}


};
