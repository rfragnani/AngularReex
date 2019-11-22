angular.module("reex").controller("AppCtrl", ["$scope", "$rootScope", "$uibModal", "$state", "$interval", function ($scope, $rootScope, $uibModal, $state, $interval) {
    var app = $rootScope;
    app.appManager = {
        init: function () {
            $rootScope.jornada = {
                jornada1: {
                    imovelSelecionado: ''
                }, jornada2: {

                }, jornada3: {

                }, jornada4: {

                }, jornada5: {

                }, jornada6: {

                }, jornada7: {

                }, jornada8: {

                }, jornada9: {

                }, jornada10: {

                }, jornada11: {

                }, jornada12: {

                }, jornada13: {

                }, jornadaLogin: {
                    
                }, jornadaMeusImoveis: {
                    
                }, jornadaMinhaSenha:{

                }, jornadaMeusDados:{
                    
                }
            };
        }
    };
    app.appManager.init();
}]);

