export default Backbone.View.extend({
  template: JST.tags,

  tagName: 'ul',

  className: 'tag-list',

  initialize: function(){
    this.render();
  },

  render: function(){
    this.$el.html(this.template());
  }
});
