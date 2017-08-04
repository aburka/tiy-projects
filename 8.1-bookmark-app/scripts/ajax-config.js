/*
  If the url is to Parse, add the Parse headers
*/
$.ajaxPrefilter(function(options, originalOptions, jqXHR){
  if(options.url.match(/api.parse.com/)){
    options.headers = options.headers || {};
    options.headers['X-Parse-Application-Id'] = '90XMpl8owCjgc37SYU6jdwErhyU1mMRm80xTwE0W';
    options.headers['X-Parse-REST-API-Key'] = '6pxUwSjXZLkRfJ7Mdd6ZhKkXNJut8kBBswMLwDHM';
  }
});
