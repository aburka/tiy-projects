var Image = Backbone.Model.extend({
  idAttribute: '_id',

  defaults: {
    url: '',
    caption: ''
  }
});

var ImageCollection = Backbone.Collection.extend({
  model: Image,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/images'
});

export default {Image, ImageCollection};
