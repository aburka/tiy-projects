var Bookmark = Backbone.Model.extend({
  idAttribute: 'objectId',

  defaults: {
    title: '',
    url: '',
    tag: ''
  },
});


var BookmarkCollection = Backbone.Collection.extend({
  url: 'https://api.parse.com/1/classes/Bookmarks',

  model: Bookmark,

  parse: function(response) {
    return response.results;
  }
});

export default {Bookmark, BookmarkCollection};
