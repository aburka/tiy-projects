import BookmarkItemView from './bookmark-item';

export default Backbone.View.extend({
  template: JST['bookmark-list'],

  tagName: 'ul',

  className: 'bookmark-list',

  initialize: function(){
    this.render();
    this.listenTo(this.collection, 'update', this.render);
  },

  render: function(){
    this.renderChildren();
  },

  renderChildren: function(){
   _.invoke(this.children || [], 'remove');

   this.children = this.collection.map(function(child) {
     var view = new BookmarkItemView({
       model: child
     });
     this.$el.append(view.el);
     return view;
   }.bind(this));

   return this;
 },

 remove: function(){
   _.invoke(this.children || [], 'remove');
   Backbone.View.prototype.remove.apply(this, arguments);
 }

});
