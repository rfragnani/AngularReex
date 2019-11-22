angular.module("reex").controller("Jornada3", ["$scope", "$rootScope", "$uibModal", "$state", "jornadaservice", "$interval", function ($scope, $rootScope, $uibModal, $state, jornadaservice, $interval) {
    var jornada3 = $rootScope;
    jornada3.jornada3Manager = {
        avancarJornada4: function () {
             jornadaservice.propertyNew($rootScope.jornada).
                then(function (address) {
                    $rootScope.jornada.jornada3.responseData = address.data;
                    $rootScope.jornada.jornada3.completed = true;
                    $state.go('jornada4');
                }).
                catch(function (err) {
                   
                });
        },
        getCep: function (cep) {

            jornadaservice.loadCep(cep).
                then(function (address) {
                    $rootScope.jornada.jornada3 = address.data;
                }).
                catch(function (err) {

                });
        },
        init: function () {
          if(!$rootScope.jornada.jornada2.completed)
             $state.go('jornada1');     
        }
    };
    jornada3.jornada3Manager.init();
}]);

