(function(){

'use strict';

angular.module('storytravelers')
  .controller('StoryCtrl', function storyCtrl (storyData) {
    
    var _this = this;

    _this.story = storyData;
    
  })
;

})();
