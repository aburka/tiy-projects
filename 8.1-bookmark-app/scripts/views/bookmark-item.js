export default Backbone.View.extend({
  template: JST['bookmark-item'],

  tagName: 'li',

  className: 'bookmark-item',

  events: {
    'click .bookmark-edit': 'editBookmark',
    'click .bookmark-delete': 'deleteBookmark',
    'submit .bookmark-edit-form': 'saveBookmark',
    'click .cancel-edit': 'cancelEdit'
  },

  initialize: function(){
    this.render();
    this.listenTo(this.model, 'add remove', this.render);
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  },

  deleteBookmark: function(e){
    this.model.destroy();
  },

  editBookmark: function(e){
    this.$('.bookmark-edit-form').show();
  },

  saveBookmark: function(e){
    e.preventDefault();
    var title = this.$('.bookmark-title').val();
    var url = this.$('.bookmark-url').val();
    var tag = this.$('.bookmark-tag').val();
    this.model.save({
      title: title,
      url: url,
      tag: tag
    });
    this.$('.bookmark-edit-form').hide();
  },

  cancelEdit: function(e){
    this.$('.bookmark-edit-form').hide();
  }

});
