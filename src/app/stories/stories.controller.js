(function(){

'use strict';

angular.module('storytravelers')
  .controller('StoriesCtrl', function storiesCtrl (storiesData, pageData) {
    
    var _this = this;

    _this.page = pageData;

    _this.stories = storiesData;

    
  })
;

})();
