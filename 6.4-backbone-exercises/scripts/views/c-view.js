export default Backbone.View.extend({
  template: JST.c,

  initialize: function(){
    this.listenTo(this.collection, 'update', this.render);
  },

  render: function(){
    this.$el.html(this.template(this.collection.toJSON()));
  }
});
