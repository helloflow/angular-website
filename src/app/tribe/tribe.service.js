(function(){

'use strict';

angular.module('storytravelers')
  .factory('tribeSvc', function tribeSvc ($resource, apiUrl, $q) {
  	
  	var Tribe = $resource(apiUrl + 'tribe/:slug', {}, {
      get: { cache: true, method: 'get' },
      query: { cache: true, method: 'get', isArray: true }
    });
  	
    return{
    	getTribe: function(){	
    		var deferred = $q.defer();   
 			  deferred.resolve( Tribe.query() );

        return deferred.promise;
    	},
      
    	getMember: function(slug){
    		var deferred = $q.defer();
  			deferred.resolve( Tribe.get({ 'slug': slug }) );

  			return deferred.promise;
    	}
      
    };
    
  })
;

})();
