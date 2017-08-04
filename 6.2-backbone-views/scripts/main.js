import LikeButtonView from './views/likeview';
import LoadingButtonView from './views/loadingview';
import Like from './models/like';
import Loading from './models/loading';

(function(){
  'use strict';

  $(document).ready(function(){

    var likeModel = new Like();
    var likeView = new LikeButtonView({model: likeModel});

    $('.application').append(likeView.el);

    var loadingModel = new Loading();
    var loadingView = new LoadingButtonView({model: loadingModel});

    $('.application').append(loadingView.el);

  });

})();
