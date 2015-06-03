(function(){

'use strict';

angular.module('storytravelers')
  .factory('pageSvc', function pageSvc ($resource, apiUrl, $q) {
  	
  	var Page = $resource(apiUrl + 'pages/:slug', {}, {
      get: { cache: true, method: 'get' }
    });

    var Menu = $resource(apiUrl + 'menus/menu', {}, {
      get: { cache: true, method: 'get' }
    });
  	
    return {
    
    	getMenu: function getMenu(){
        return Menu.get().$promise.then(function(result){
          return result.items;
        });    
      },
      
      getPage: function getPage(slug){
    		var deferred = $q.defer();
  			deferred.resolve( Page.get({ 'slug': slug }) );

  			return deferred.promise;
    	}
    };
    
  })
;

})();
