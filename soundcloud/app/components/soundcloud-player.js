import Ember from 'ember';

export default Ember.Component.extend({
  className: ['play'],
  isPlaying: false,

  actions: {
    play: function(){
      this.set('isPlaying', true);
      this.get('stream').play();
    },
    pause: function(){
      this.set('isPlaying', false);
      this.get('stream').pause();
    },
  }
});
