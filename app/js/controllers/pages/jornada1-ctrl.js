angular.module("reex").controller("Jornada1", ["$scope", "$rootScope", "$uibModal", "$state","jornadaservice","$interval", function ($scope, $rootScope, $uibModal, $state,jornadaservice,$interval) {
    var jornada1 = $rootScope;
    jornada1.jornada1Manager = {  
        avancarJornada2 : function(){ 
            $rootScope.jornada.jornada1.completed = true;
            $state.go('jornada2');
        },
        init: function () { 
            $rootScope.jornada.jornada1.imovelSelecionado = 'casa';
        }
    };
    jornada1.jornada1Manager.init();
}]);

