import Ember from 'ember';

export default Ember.Route.extend({
  model: function(options){
      return Ember.$.ajax('https://api.forecast.io/forecast/1891ac3d6ce2163800f45a28eff57166/' + options.lat + ',' + options.long, {dataType: 'jsonp'});
    }
});
