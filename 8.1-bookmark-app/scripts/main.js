import BookmarkListView from './views/bookmark-list';
import AddBookmarkView from './views/add-bookmark';
import TagView from './views/tags';

import {BookmarkCollection} from './models/bookmarks';

import ajaxConfig from './ajax-config';

(function(){
  'use strict';

  $(document).ready(function(){
    var bookmarks = new BookmarkCollection();
    bookmarks.fetch();
    var listView = new BookmarkListView({collection: bookmarks});
    var addView = new AddBookmarkView({
      collection: bookmarks
      });
    $('.add-bookmark-container').html(addView.el);
    $('.bookmark-container').html(listView.el);

    var tagView = new TagView();
    $('.tag-container').html(tagView.el);
  });
})();
