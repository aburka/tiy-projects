var Menu = Backbone.Model.extend({
  idAttribute: 'objectId',

  defaults: function() {
    return {
      isComplete: false,
      item: '',
      price: 0,
      description: '',
      category: '',
      popularity: 0,
    };
  }
});

var MenuCollection = Backbone.Collection.extend({
  url: 'https://api.parse.com/1/classes/Menu',
  model: Menu,

  // The Parse API returns models under "results".
  parse: function(response) {
    return response.results;
  }
});

export default {Menu, MenuCollection};
