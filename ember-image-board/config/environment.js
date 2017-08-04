/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-image-board',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
    },

    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self'",
      'font-src': "'self' fonts.gstatic.com",
      'connect-src': "'self' api.parse.com",
      'img-src': "'self' *",
      'style-src': "'self' *",
      'media-src': "'self'"
    },

      'simple-auth': {
        routeAfterAuthentication: 'landing'
    },

    APP: {
      applicationId: 'ihjeRgCculPpFXQn13l6HQoKh0uhJmI6O1ECzYdj',
      restApiId: 'pmTm01NlR8BbDQZdNVvGiKJh4CIZThPirwKPFDaj'
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
