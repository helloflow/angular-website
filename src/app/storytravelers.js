(function(){

'use strict';

angular.module('storytravelers', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'angular-loading-bar'])
  
  .constant('apiUrl', 'http://api.storytravelers.dev/wp-json/')
  
  .config(function storytravelersConfig ($stateProvider, $urlRouterProvider, $locationProvider, $compileProvider) {
    $stateProvider
      
      .state('stories', {
        url: '/',
        templateUrl: 'app/stories/stories.html',
        controller: 'StoriesCtrl as stories',
        resolve: {
          storiesData: function storiesData(storiesSvc){
            return storiesSvc.getStories();
          },
          pageData: function pageData(pageSvc){
            return pageSvc.getPage('stories');
          }
        },
        data: { rootPage: true }
      })

      .state('story', {
        url: '/stories/:slug',
        templateUrl: 'app/stories/story.html',
        controller: 'StoryCtrl as story',
        resolve: {
          storyData: function storyData(storiesSvc, $stateParams){
            return storiesSvc.getStory($stateParams.slug);
          }
        },
        data: { rootPage: false, rootState: 'stories' }
      })
      
      .state('tribe', {
        url: '/tribe',
        templateUrl: 'app/tribe/tribe.html',
        controller: 'TribeCtrl as tribe',
        resolve: {
          tribeData: function tribeData(tribeSvc){
            return tribeSvc.getTribe();
          },
          pageData: function pageData(pageSvc){
            return pageSvc.getPage('tribe');
          }
        },
        data: { rootPage: true }
      })
      
      .state('member', {
        url: '/tribe/:slug',
        templateUrl: 'app/tribe/member.html',
        controller: 'MemberCtrl as member',
        resolve: {
          memberData: function memberData(tribeSvc, $stateParams){
            return tribeSvc.getMember($stateParams.slug);
          }
        },
        data: { rootPage: false, rootState: 'tribe' }
      })
      
      .state('page', {
        url: '/:slug',
        templateUrl: 'app/page/page.html',
        controller: 'PageCtrl as page',
        resolve: {
          pageData: function pageData(pageSvc, $stateParams){
            return pageSvc.getPage($stateParams.slug);
          }
        },
        data: { rootPage: true }
      })
    ;

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);

    $compileProvider.debugInfoEnabled(false);

  })

  .run(function appRun($rootScope, $state) {
    $rootScope.$state = $state;
  })
;

})();