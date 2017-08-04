import Index from './views/index';

//import models
import {Post} from './models/a';
import {B} from './models/b';

//import views
import Aview from './views/a-view';
import Bview from './views/b-view';
import PostIndexView from './views/c-view';
import PostShowView from './views/c-view-post';

//import collections
import {PostCollection} from './models/a';
import {BCollection} from './models/b';

var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'a': 'aPost',
    'b': 'bPerson',
  },

  initialize: function(){
    this.post = new PostCollection();
  },

  index: function(){
    var index = new Index();
    $('#app').html(index.el);
  },

  aPost: function(){
    var aView = new Aview({collection: this.post});
    $('#app').html(aView.el);
  },

  bPerson: function(){
    var bCollection = new BCollection();
    var bView = new Bview({collection: bCollection});
    $('#app').html(bView.el);
  }
});

var router = new Router();

export default router;
