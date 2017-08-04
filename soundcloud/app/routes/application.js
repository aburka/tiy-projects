import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      // on success
      SC.get("/tracks/2708347", {limit: 1}, function(track){
        SC.stream("/tracks/2708347", function(stream){
          resolve({
            track: track,
            stream: stream
          });
        });
      });
    });
  }
});
