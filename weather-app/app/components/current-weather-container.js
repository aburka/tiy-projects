import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    var temp = this.get('current.temperature');
    temp = temp.toString().slice(0,2);
    this.set('current.temp', temp);
  }
});
