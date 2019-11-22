angular.module("reex").controller("Jornada4", ["$scope", "$rootScope", "$uibModal", "$state","jornadaservice","$interval", function ($scope, $rootScope, $uibModal, $state,jornadaservice,$interval) {
    var jornada4 = $rootScope;
    jornada4.jornada4Manager = {  
        avancarJornada5: function(){
            
            jornadaservice.signup($rootScope.jornada).
                then(function (signup) {
                    $rootScope.jornada.jornada4.responseData = signup.data;
                    $rootScope.jornada.jornada4.completed = true;
                    $state.go('jornada5');
                }).
                catch(function (err) {
                   
                });
        },
        init: function () { 
          // if(!$rootScope.jornada.jornada3.completed)
          //   $state.go('jornada3');
        }
    };
    jornada4.jornada4Manager.init();
}]);

