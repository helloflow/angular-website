(function(){

'use strict';

angular.module('storytravelers')
  .controller('MemberCtrl', function memberCtrl (memberData) {
    
    var _this = this;

    _this.member = memberData;
    
  })
;

})();
