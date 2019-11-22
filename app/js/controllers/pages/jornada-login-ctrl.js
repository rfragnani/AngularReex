angular.module("reex").controller("JornadaLogin", ["$scope", "$rootScope", "$uibModal", "$state", "jornadaservice", "$interval", function ($scope, $rootScope, $uibModal, $state, jornadaservice, $interval) {
    var jornadaLogin = $rootScope;
    jornadaLogin.jornadaLoginManager = {
        signin: function () {
            jornadaservice.signin($rootScope.jornada).
                then(function (signin) {
                    $rootScope.jornada.jornadaLogin.responseData = signin.data;
                    $state.go('jornada5');
                }).
                catch(function (err) {
                  
                });
        },
        init: function () {

        }
    };
    jornadaLogin.jornadaLoginManager.init();
}]);

