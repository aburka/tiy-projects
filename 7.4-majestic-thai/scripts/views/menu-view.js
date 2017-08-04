import MenuCategoryView from './menu-category';

export default Backbone.View.extend({

  template: JST.menu,

  initialize: function(options){
    // this.order = options.order;
    this.render(options);
  },

  render: function(options){
    this.$el.html(this.template(this.collection.toJSON()));
    this.renderChildren(options);
  },

  renderChildren: function(options){
      _.invoke(this.children || [], 'remove');

      this.order = options.order;

      var popularItems = _.filter(this.collection.models, function(item) {
  			if (item.get('popularity') > 9) {
  				return item;
  			}
  		});

  		var filteredItems = new Backbone.Collection(popularItems);

  		var popular = new MenuCategoryView({
  			type: 'popular',
        category: 'Popular',
  			collection: filteredItems,
  			order: this.order
  		});

  		this.$el.append(popular.el);
  		this.children = [popular];

      _.each(this.collection.groupBy('category'), function(item, category) {

    			var itemCollection = new Backbone.Collection(item)
    			var menuCategoryView = new MenuCategoryView({
    				collection: itemCollection,
    				order: this.order,
            category: category,
    			});
    			this.children.push(menuCategoryView);
    			this.$el.append(menuCategoryView.el);
    		}.bind(this));

      return this;
    },

    remove: function(){
      _.invoke(this.children || [], 'remove');
      Backbone.View.prototype.remove.apply(this, arguments);
    }
});
