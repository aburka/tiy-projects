var ChildPostView = Backbone.View.extend({
  renderChildren: function(){
    _.invoke(this.children || [], 'remove');

    this.children = this.collection.map((child) => {
      var view = new CviewPost({
        model: child
      });
      this.$('.blog-post-container').append(view.el);
      return view;
    });
  }
});

export default ChildPostView;
