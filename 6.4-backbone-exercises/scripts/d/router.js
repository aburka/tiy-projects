import {Link} from '../models/d';
import {LinkCollection} from '../models/d';

import LinkImportView from "../views/d-view";
import LinkListView from '../views/d-link-view';
import LinkTagView from '../views/d-tag-view';

var Router = Backbone.Router.extend({
  routes: {
    '': 'index'
  },

  initialize: function(){
    this.link = new Link();
    this.links = new LinkCollection();

    this.form = new LinkImportView({collection: this.links});
    $('#add-url').append(this.form.el);

    this.linkView = new LinkListView({collection: this.links});
    this.links.fetch();
    $('#link-index').append(this.linkView.el);

    this.tags = new LinkTagView({collection: this.links});
    $('#tag-index').append(this.tags.el);
  },

  index: function(){

  }

});
var dRouter = new Router();

export default dRouter;
