angular.module('jsonAPI.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http) {
  
})

.controller('QuoteCtrl', function($scope, $http) {
  $scope.getQuote = function(){
    $http.get("http://quotesondesign.com/api/3.0/api-3.0.json")
    .then(function(response) {
      $scope.quote = response.data.quote;
      $scope.author = "- " + response.data.author;
    },
    function(response) {
      alert("Failed to Retrieve! Try again.");
    })
    .finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
    });
  }
})

.controller('WeatherCtrl', function($scope, $http, $log) {
  $scope.search = {};
  $scope.getWeather = function() {
    var cityParam = $scope.search.city.replace(' ', '+');
    $http.get("http://api.worldweatheronline.com/free/v2/weather.ashx?key=f64434c68452c28cde245136f28af&q="+cityParam+"&num_of_days=1&format=JSON")
      .then(function(response) {
        $log.info(response.data)
          $scope.city = response.data;
      },
      function(response) {
        alert("Failed to Retrieve! Try again.");
      });
  }
})