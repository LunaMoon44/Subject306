var loadState = {
  preload: function() {
    //Add a line of text to the screen
    loadingLabel = game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'}); //text to say loading...

    // load sprites
game.load.image('cell room', 'assets/cell room basic design 2.0 with furtinutre .png');
game.load.image('corridor1', 'assets/corridor1.png');
game.load.spritesheet('subject306', 'assets/subject306 finished-Sheet.png', 32, 64);
game.load.image('key', 'assets/key.png');
game.load.image('fakekey', 'assets/fakekey.png');
game.load.image('riddle', 'assets/Riddle page.png');
game.load.image('door', 'assets/cell room door.png');
  },

  create: function() {
  game.state.start('menu');                               // load the menu
  }

};
