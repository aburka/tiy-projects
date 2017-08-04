import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return new Ember.RSVP.Promise(function(resolve,reject){
      navigator.geolocation.getCurrentPosition(function(position){
        resolve({
          lat: position.coords.latitude,
          long: position.coords.longitude
        });
        console.log(position.coords.latitude, position.coords.longitude);
      });
    });
  }
});
