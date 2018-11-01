//Create a Phaser game with dimensions 800x600
var game = new Phaser.Game(1300, 610, Phaser.AUTO, 'game-world');

//Add the different games states
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('room1', roomState1);
game.state.add('win', winState);
//Any game spanning variables/settings could be placed here
game.global = {
  lives: 3
};

//Load the boot state
game.state.start('boot');
