import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    create: function(){
      this.sendAction('action', this.get('model'));
    }
  }
});
