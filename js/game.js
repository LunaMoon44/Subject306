//Create a Phaser game with dimensions 1300x610
var game = new Phaser.Game(1300, 610, Phaser.AUTO, 'game-world');

//Add the different games states
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('roomOne', roomStateOne);
game.state.add('roomtwo', roomStatetwo);
game.state.add('libary', libaryState);
game.state.add('roomthree', roomthreeState);
game.state.add('splitroom', splitStateroom);
game.state.add('strengthroom', strengthStateroom);
game.state.add('knowledgeroom', knowledgeStateroom);
//game.state.add('blackroom', blackroomState);
game.state.add('forest', forestState);
game.state.add('win', winState);
//Any game spanning variables/settings could be placed here
game.global = {
  lives: 3
};

//Load the boot state
game.state.start('boot');
