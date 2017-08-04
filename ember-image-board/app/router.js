import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('images', function() {
    this.route('create');
    this.route('show', {path: '/:image_id'});
  });
  this.route('landing', {path: '/'});

  this.route('sessions', function() {
    this.route('create');
  });

  this.route('users', function() {
    this.route('create');
    this.route('show', {path: ':parse-user_id'});
    this.route('current');
  });
});

export default Router;
