import Ember from 'ember';



export default Ember.Component.extend({
  didInsertElement: function() {
    // var hourlyArray = this.get('hourly').slice(0,4);
    // this.set('hourly', hourlyArray);

    // hourlyArray.map(function(i){
    //   console.log(i.time);
    //   // var time = hourlyArray.get(i.time);
    //   var time = moment(hourlyArray.get(i.time)).format('h:mm a');
    //   console.log(time);
    //   return ('hourly.time', time);
    // });
  },

  hourlyArray: function(){
    return this.get('hourly').slice(0, 4);
  }.property('hourly.@each'),


  // hourlyTemp: function() {
  //   var temp = this.get('hourly.temperature');
  //   return temp.map(function(i){
  //     var temperature = i.temperature.toFixed([0]);
  //     console.log(temperature);
  //     return temperature;
  //   });
  // }.property('hourlyArray.@each.temp'),

});
