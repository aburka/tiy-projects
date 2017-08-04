import {Post} from './models/c';
import {PostCollection} from './models/a';
import IndexView from './views/c-view';
import ShowView from './views/c-view-post';

var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    ':id' : 'show'
  },

  initialize: function(){
    this.posts = new PostCollection();
    this.posts.fetch();
    this.indexView = new IndexView({collection: this.posts});
    $('#app').html(this.indexView.el);
  },

  index: function(){
  },

  show: function(id){
    this.posts.fetch().then(function(){
      var post = this.posts.get(id);
      this.showView(new ShowView({model: post}));
    }.bind(this));

  },

  showView: function(view) {
    if(this.currentView) this.currentView.remove();
    this.currentView = view;
    $('#app').html(view.el);
    return view;
  }
});
var cRouter = new Router();

export default cRouter;
