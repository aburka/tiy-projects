import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.createRecord('parse-user');
  },

  actions: {
    create: function(user){
      user.save();
      this.transitionTo('images.index');
    },
  }

});
