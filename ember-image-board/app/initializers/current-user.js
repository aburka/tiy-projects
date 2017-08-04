import Ember from "ember";
import Session from 'simple-auth/session';
import ParseUser from 'ember-parse-adapter/models/parse-user';

export function initialize(/* container, application */) {
  Session.reopen({
    setCurrentUser: function(){
      var token = this.get('sessionToken');

      if (this.get('isAuthenticated') && !Ember.isEmpty(token)) {
        ParseUser.current().then(function(currentUser){
          this.set('currentUser', currentUser);
        }.bind(this));
      }
    }.observes('sessionToken')
  });
}

export default {
  name: 'current-user',
  initialize: initialize
};
