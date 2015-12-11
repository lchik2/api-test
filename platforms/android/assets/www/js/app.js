// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('jsonAPI', ['ionic'])

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
}) 

.controller('QuoteCtrl', function($scope, $http) {
  $scope.getQuote = function(){
    $http.get("http://quotesondesign.com/api/3.0/api-3.0.json").then(function(response) {
      $scope.quote = response.data.quote;
      $scope.author = "- " + response.data.author;
    }, function(err) {
      console.error('ERR', err);
    })
  }
})
