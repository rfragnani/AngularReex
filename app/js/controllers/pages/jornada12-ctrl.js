angular.module("reex").controller("Jornada12", ["$scope", "$rootScope", "$uibModal", "$state","jornadaservice","$interval", function ($scope, $rootScope, $uibModal, $state,jornadaservice,$interval) {
    var jornada12 = $rootScope;
    jornada12.jornada12Manager = {  
        redirectPrint: function(){
            $rootScope.jornada.jornada12.isRedirectPrint = true; 
            $state.go('jornada11');
        },
        init: function () { 
           
        }
    };
    jornada12.jornada12Manager.init();
}]);

