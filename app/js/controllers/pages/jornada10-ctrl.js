angular.module("reex").controller("Jornada10", ["$scope", "$rootScope", "$uibModal", "$state","jornadaservice","$interval", function ($scope, $rootScope, $uibModal, $state,jornadaservice,$interval) {
    var jornada10 = $rootScope;
    jornada10.jornada10Manager = {  
         loadHomeEquity : function(){
             jornadaservice.loadHomeEquity($rootScope.jornada).
                then(function (property) {
                    $rootScope.jornada.jornada10 = property.data;
                    
                }).
                catch(function (err) {
                   
                });
        },
        init: function () { 
           this.loadHomeEquity();
        }
    };
    jornada10.jornada10Manager.init();
}]);

