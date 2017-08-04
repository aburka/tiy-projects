(function(){
    'use strict';

    var $ul = document.querySelector('.listing');

  var url = 'https://api.etsy.com/v2/listings/active.js?api_key=1degfdildji59k8x48ofhg6k&keywords=whiskey&includes=Images,Shop,taxonomy_path&sort_on=score&limit=48&offset=0';
     fetchJSONP(url, app);

   function fetchJSONP(url, callback) {
       var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
       var script = document.createElement('script');

       window[callbackName] = function(data) {
           delete window[callbackName];
           document.body.removeChild(script);
           callback(data);
       };

       script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
       document.body.appendChild(script);
   }

    function app(response) {
      var listing = response.results;
      console.log(listing);
      displayListing(listing);
    }
    
    function displayListing(listing) {
      var source   = document.querySelector("#listing-template").innerHTML;
      var template = Handlebars.compile(source);
      listing.forEach(function(listing){
        var output = template(listing);
        $ul.insertAdjacentHTML('beforeend', output);
      });
    }
    
})();