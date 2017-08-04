import Like from '../models/like';

//create backbone view for like button
var LikeButtonView = Backbone.View.extend({
  template: JST.likeButtonTemplate,

//initialize like button view
  initialize: function(){
    this.render();
    this.model.on('change:count', this.render, this);
  },

//listen for click on like button to run like function
  events: {
    'click .like-button': 'like',
  },

//event function to prevent refresh and increment likes (from model)
  like: function(e){
    e.preventDefault();
    this.model.like();
  },

//renders view in handlebars
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

export default LikeButtonView;
