export default Backbone.View.extend({
  template: JST.dAddUrl,

  events: {
    'click .submit-url': 'submitUrl'
  },

  initialize: function(){
    this.render();
  },

  render: function(){
    this.$el.html(this.template);
  },

  submitUrl: function(e){
    e.preventDefault();
    this.collection.create({
      title: this.$('.title').val(),
      url: this.$('.url').val(),
      tag: this.$('.tag').val()
    });
  }
});
