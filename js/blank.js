var blankState = {

create: function() {
bg = game.add.sprite(0, 0, 'blackroom');
Water = game.add.audio('Water', 1, true);
Water.play();
bg.time.events.add(Phaser.Timer.SECOND*10, loadnext, this);

},

update: function() {
game.debug.text("time until next level: "+ bg.time.events.duration,32,32);
},

loadnext: function(){
  console.log('next');
    game.state.start('forrest');
}
};
