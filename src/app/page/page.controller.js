(function(){

'use strict';

angular.module('storytravelers')
  .controller('PageCtrl', function pageCtrl (pageData) {
    
    var _this = this;

    _this.page = pageData;
  })
;

})();
