angular.module("reex").controller("Jornada7", ["$scope", "$rootScope", "$uibModal", "$state","jornadaservice","$interval", function ($scope, $rootScope, $uibModal, $state,jornadaservice,$interval) {
    var jornada7 = $rootScope;
    jornada7.jornada7Manager = {  
         avancarJornada8: function(){
            
            jornadaservice.update($rootScope.jornada).
                then(function (update) {
                    $rootScope.jornada.jornada7.responseData = update.data;
                    $state.go('jornada8');
                }).
                catch(function (err) {
                   
                });
        },
        init: function () { 
           
        }
    };
    jornada7.jornada7Manager.init();
}]);

