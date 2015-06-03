/// <reference path="../../typings/jquery/jquery.d.ts"/>
(function(){

'use strict';

angular.module('storytravelers')
  .controller('StorytravelersCtrl', function storytravelersCtrl ($scope, $rootScope, $window, $state, pageSvc) {

    var _this = this;

    var menu = pageSvc.getMenu(),
        menuNames = [];

    menu.then(function(result){
      _this.pages = result;

      _this.pages.forEach(function(page){
        menuNames.push(page.slug);
      });

    });

    _this.back = false;
    _this.childPage = false;

    $scope.$on('$stateChangeStart', function stateStart (event, toState, toParams, fromState, fromParams) {

      if( angular.isDefined(fromState.data) ) {
        if( angular.isDefined(fromState.data.rootState) ) {
          if( fromState.data.rootState === toState.name ) {
            _this.back = true;
          } else {
            _this.back = false;
          }
        } 

        if( (fromState.data.rootPage === true && toState.data.rootPage === false) || (fromState.data.rootPage === false && _this.back === true) ) {
          _this.childPage = true;
        } else {
          _this.childPage = false;
        }
      }

      var bodyScroll = $('body').scrollTop();
      $('.viewContainer').addClass('hidden').scrollTop(bodyScroll);

    });
    
    $scope.$on('$stateChangeSuccess', function stateChange (event, toState, toParams, fromState, fromParams) {
      
      var toName, fromName;
      if(toState.name === 'page') { $state.current.slug = toName = toParams.slug; } else { $state.current.slug = toName = toState.name; if ($state.current.slug==='stories'){$state.current.slug = '';} }
      if(fromState.name === 'page') { fromName = fromParams.slug; } else { fromName = fromState.name; }

      if ( angular.isDefined(toState.data.rootState) ) {
        if( toState.data.rootState === fromState.name ) {
          _this.back = true;
        } else {
          _this.back = false;
        }
      } else if( menuNames.indexOf(toName) < menuNames.indexOf(fromName) ){ 
        _this.back = true;
      } else {
        _this.back = false;
      }
      
      $('viewContainer').removeClass('hidden');
    
    });

  })
;

})();