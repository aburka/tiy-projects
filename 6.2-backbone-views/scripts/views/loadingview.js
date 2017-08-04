import Loading from '../models/loading';

//create backbone view for loading button
var LoadingButtonView = Backbone.View.extend({
  template: JST.loadingButtonTemplate,

//initialize view
  initialize: function(){
    this.render();
    this.model.on('change', this.render, this);
  },

//click event listener for loading-button class to run submit function
  events: {
    'click .loading-button': 'submit',
  },

//submit function to prevent refresh and run submit function
  submit: function(e){
    e.preventDefault();
    this.model.submit();
  },

//render function into handlebars template
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  }
});

export default LoadingButtonView;
