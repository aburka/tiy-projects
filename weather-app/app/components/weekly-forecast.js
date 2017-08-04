import Ember from 'ember';

export default Ember.Component.extend({
  init: function(){
    this._super();
  },

  didInsertElement: function() {
    var weeklyArray = this.get('weekly').slice(0,7);
    this.set('weekly', weeklyArray);
  },
});
