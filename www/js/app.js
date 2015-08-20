angular.module('parkAssist', ['ionic', 'ngCordova', 'modalAssist', 'google.places'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  // Set up an abstract state for the tabs directive:
    
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })
    .state('tab.near', {
      url: '/near',
      views: {
        'tab-near': {
          template: '<map></map>',
          // controller: 'MapCtrl'
        }
      }
    })
    .state('tab.destination', {
      url: '/destination',
      views: {
        'tab-destination': {
          // templateUrl: 'templates/modalTemplate.html',
          // controller: 'MapCtrl'
        }
      }
    })
    // .state('tab.parked', {
    //   url: '/parked',
    //   views: {
    //     'tab-parked': {
    //       templateUrl: 'templates/parked.html',
    //       controller: 'ParkedCtrl'
    //     }
    //   }
    // })
    .state('tab.parked', {
      url: '/parked',
      views: {
        'tab-parked': {
          templateUrl: 'templates/parked.html',
          controller: 'ParkedCtrl'
        }
      }
    })

    $urlRouterProvider.otherwise('/tab/near');
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});




