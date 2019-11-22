angular.module("reex").controller("Jornada5", ["$scope", "$rootScope", "$uibModal", "$state","jornadaservice","$interval", function ($scope, $rootScope, $uibModal, $state,jornadaservice,$interval) {
    var jornada5 = $rootScope;
    jornada5.jornada5Manager = {  
        init: function () { 
          // if($rootScope.jornada.jornada4.responseData && $rootScope.jornada.jornada4.responseData.emailVerified  == true)
          // $state.go('jornada6');
          // else
          // $state.go('jornada1');
        }
    };
    jornada5.jornada5Manager.init();
}]);

