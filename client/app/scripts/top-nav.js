(function() {
    
  var app = angular.module('myApp');
  
  app.directive("topNav", ["$location",
    function ($location) {
        
        var topNavCtrl = function() { 
          var vm = this;
               
          vm.isActive = function(viewLocation) { 
            return viewLocation === $location.path();
          };
          
        };
        
        return {
           restrict: 'E',
           templateUrl: "/app/views/top-nav.html",
           controller: topNavCtrl,
           controllerAs: "nav"
        };
  }]);
  
  
}());
