angular.module("reex").controller("Jornada9", ["$scope", "$rootScope", "$uibModal", "$state","jornadaservice","$interval", function ($scope, $rootScope, $uibModal, $state,jornadaservice,$interval) {
    var jornada9 = $rootScope;
    jornada9.jornada9Manager = {  
        loadPropertyId : function(){
             jornadaservice.loadPropertyId($rootScope.jornada).
                then(function (property) {
                    $rootScope.jornada.jornada9 = property.data;
                    
                }).
                catch(function (err) {
                   
                });
        },
        init: function () { 
           
           this.loadPropertyId();
        }
    };
    jornada9.jornada9Manager.init();
}]);

