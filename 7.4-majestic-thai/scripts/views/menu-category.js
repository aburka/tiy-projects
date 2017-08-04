import MenuItemView from './menu-item';

export default Backbone.View.extend({
  template: JST['menu-category'],

  tagName: 'div',

  className: 'menu-categories',

  initialize: function(options){
    this.category = options.category;
    this.order = options.order;
    this.render(options);

  },

  render: function(options){
    // Order of functions is important here!!
    this.$el.html(this.template(this.category));
    this.renderChildren(options);

  },

  renderChildren: function(options){
      _.invoke(this.children || [], 'remove');

      this.order = options.order;

      this.children = this.collection.map(function(child) {
        var view = new MenuItemView({
          model: child,
          collection: this.collection,
          order: this.order
        });
        this.$el.append(view.el);
        return view;
      }.bind(this));
    },

    remove: function(){
      _.invoke(this.children || [], 'remove');
      Backbone.View.prototype.remove.apply(this, arguments);
    }
});
