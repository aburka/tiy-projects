export default Backbone.View.extend({
  template: JST.dLinkList,

  // events: {
  //   'click .tag-url': 'filter'
  // },

  initialize: function(){
    this.render();
    this.listenTo(this.collection, 'update', this.render);
  },

  render: function(){
    this.$el.html(this.template(this.collection.toJSON()));
  },

});
