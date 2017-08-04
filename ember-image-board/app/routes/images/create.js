import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.createRecord('image');
  },

  actions: {
    save: function(image){
      image.save();
      this.transitionTo('images.index');
    }
  }
});
