
requirejs.config({
	paths : {
        'jquery'     : '../vendor/jquery/1.8.3/jquery.min'
      , 'underscore' : '../vendor/lodash/1.0.0-rc.3/lodash.min'
      , 'backbone'   : '../vendor/backbone/0.9.9/backbone-min'
      , 'random'     : 'app/utils/random'
      , 'User'       : 'app/models/User'
      , 'Roles'      : 'app/models/Roles'
      , 'AppView'    : 'app/views/AppView'
      , 'editors'    : 'app/views/editors'
	},
    shim: {
        'backbone': {
            deps    : ['underscore', 'jquery']
          , exports : 'Backbone'
        }
    }
});

require(['random'], function(random) {
    console.log(random(1,10));
});

require(['jquery', 'User', 'AppView'], function($, User, AppView) {
	$(function() {
		new AppView({'model': new User()}).render();
	});
});
