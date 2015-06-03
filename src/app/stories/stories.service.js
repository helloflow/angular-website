(function(){

'use strict';

angular.module('storytravelers')
  .factory('storiesSvc', function storiesSvc ($resource, apiUrl, $q) {
  	
  	var Stories = $resource(apiUrl + 'stories/:slug', {}, {
      get: { cache: true, method: 'get' },
      query: { cache: true, method: 'get', isArray: true }
    });
  	
    return {
    	
      getStories: function getStories(){	
    		var deferred = $q.defer();   
        deferred.resolve( Stories.query() );

        return deferred.promise;
    	},
      
    	getStory: function getStory(slug){
    		var deferred = $q.defer();
  			deferred.resolve( Stories.get({ 'slug': slug }) );

  			return deferred.promise;
    	}
      
    };
    
  })
;

})();
