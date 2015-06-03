(function(){

'use strict';

angular.module('storytravelers')
  .controller('TribeCtrl', function tribeCtrl (tribeData, pageData) {
    
    var _this = this;

    _this.page = pageData;

    _this.tribe = tribeData;
    
  })
;

})();
