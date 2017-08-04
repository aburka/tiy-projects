import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',

  classNames: ['image-show-container'],

  actions: {
    back: function(){
      this.sendAction('action');
    }
  }
});
