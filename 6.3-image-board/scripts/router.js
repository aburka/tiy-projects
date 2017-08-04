import IndexView from './views/index';
import FormView from './views/form';

import {ImageCollection} from './models/images';
import {FormCollection} from './models/form';

var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'add': 'add'
  },

  initialize: function(){
   this.images = new ImageCollection();
   this.form = new FormCollection();
  },

  index: function(){
    var view = new IndexView({collection: this.images});
    $('.body-container').html(view.el);
    this.images.fetch();
  },

  add: function(){
    var formView = new FormView({collection: this.form});
    $('.add-image-form').html(formView.el);
  }

  // initialize: function(){
  //   // var viewImages = new IndexView({collection: this.url});
  //   $('.image').html(application.el);
  // },

  // add: function(){
  //   var formView = new FormView(){
  //     collection: this.url;
  //     caption: this.caption;
  //   }),
  //   $('.form').html(formView.el);
  //   this.url.fetch();
  // },
});

var router = new Router();

export default router;
