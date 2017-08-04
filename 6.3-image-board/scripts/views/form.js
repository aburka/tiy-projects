export default Backbone.View.extend({
  template: JST.form,

  events: {
    'submit .add-image-button': 'addImage'
  },

  addImage: function(e){
    e.preventDefault();
    var url = this.$('.image-url').val();
    var caption = this.$('.caption').val();
    this.collection.add({url: url, caption: caption});
  },

  initialize: function(){
    this.render();
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});
//
// _.invoke(this.children || [], 'remove');
//
//    this.children = this.collection.map((child) => {
//      var view = new TaskItemView({
//        model: child
//      });
//      this.$('.tasks-list').append(view.el);
//      return view;
//    });
