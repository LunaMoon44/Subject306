var loadState = {
  preload: function() {
    //Add a line of text to the screen
    loadingLabel = game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'}); //text to say loading...

    // load sprites
game.load.image('cell room', 'assets/cell room basic design 2.0 with furtinutre .png');
game.load.image('library', 'assets/Library.png');
game.load.image('splitroom', 'assets/neutral room basic design.png');
game.load.image('strength', 'assets/strengthRoom.png');
game.load.image('knowledge', 'assets/KnowledgeRoom.png');
game.load.image('bigroom', 'assets/Final Room.png');
game.load.image('blackroom', 'assets/running water room.png');
game.load.image('forest', 'assets/forrest.png');
game.load.image('dungonone', 'assets/Dungeon One.png');
game.load.spritesheet('subject306', 'assets/subject306 finished-Sheet.png', 32, 64);
game.load.image('key', 'assets/key.png');
game.load.image('fakekey', 'assets/fakekey.png');
game.load.image('riddle', 'assets/Riddle page.png');
game.load.image('riddlepage', 'assets/paper screen.png');
game.load.image('door', 'assets/cell room door.png');
game.load.image('spikes', 'assets/Spikes.png');
game.load.audio('water', 'assets/Running Water.mp3');
game.load.audio('soundtrack', 'assets/Dungeon Music.mp3');
game.load.image('menu bg', 'assets/Menu Page.png')
game.load.image('finalroom', 'assets/Final Room.png');
  },

  create: function() {
  game.state.start('menu');                               // load the menu
  }

};
