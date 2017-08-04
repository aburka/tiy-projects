export default Backbone.View.extend({
  template: JST.a,

  events: {
    'click button': 'submitPost'
  },

  initialize: function(){
    this.render();
  },

  render: function(){
    this.$el.html(this.template());
  },

  submitPost: function(e){
    e.preventDefault();
    this.collection.create({
      title: this.$('.post-title').val(),
      post: this.$('.post-content').val()
    });
  }
});
