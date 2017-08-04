/*
  If the url is to Parse, add the Parse headers
*/
$.ajaxPrefilter(function(options, originalOptions, jqXHR){
  if(options.url.match(/api.parse.com/)){
    options.headers = options.headers || {};
    options.headers['X-Parse-Application-Id'] = 'LhGSCcceIVGuQRKHodcAkiSUcr2kV55OSynHPcU0';
    options.headers['X-Parse-REST-API-Key'] = 'Z3EjGCJfWC2rp9FZtfBEn7fXBxmEFULs3ug2mEkT';
  }
});
