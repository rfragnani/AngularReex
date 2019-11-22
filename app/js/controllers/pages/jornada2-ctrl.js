angular.module("reex").controller("Jornada2", ["$scope", "$rootScope", "$uibModal", "$state","jornadaservice","$interval", function ($scope, $rootScope, $uibModal, $state,jornadaservice,$interval) {
    var jornada2 = $rootScope;
    jornada2.jornada2Manager = { 
        avancarJornada3: function(){ 
            $rootScope.jornada.jornada2.completed = true;
            $state.go('jornada3');
        },
        init: function () { 
           if(!$rootScope.jornada.jornada1.completed){
             $state.go('jornada1');
           }
        }
    };
    jornada2.jornada2Manager.init();
}]);

