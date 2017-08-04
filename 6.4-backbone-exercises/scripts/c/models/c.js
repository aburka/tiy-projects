var Post = Backbone.Model.extend({
  idAttribute: "_id",

  toJSON: function(){
    return _.extend({}, _.omit(this.attributes, '_id'), {
      id: this.id
    });
  },

  defaults: {
    title: '',
    post: ''
  }
});

var PostCollection = Backbone.Collection.extend({
  model: Post,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/amya'
});

export default {Post, PostCollection};
