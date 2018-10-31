var loadState = {
  preload: function() {
    //Add a line of text to the screen
    loadingLabel = game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'}); //text to say loading...

    // load sprites
game.load.image(0, 0, 'background');

  },

  create: function() {
  game.state.start('menu');                               // load the menu
  }

  };
