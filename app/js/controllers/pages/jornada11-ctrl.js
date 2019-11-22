angular.module("reex").controller("Jornada11", ["$scope", "$rootScope", "$uibModal", "$state", "jornadaservice", "$interval", "$timeout", function ($scope, $rootScope, $uibModal, $state, jornadaservice, $interval, $timeout) {
    var jornada11 = $rootScope;
    jornada11.jornada11Manager = {
        accept: function () {
            jornadaservice.accept($rootScope.jornada).
                then(function (termAccept) {
                    $rootScope.jornada.jornada11 = termAccept.data;
                    $state.go('jornada12');
                }).
                catch(function (err) {

                });
        },
        print: function () {
            window.print();
            //var conteudo = document.getElementById('print-container').innerHTML;  
            //var win = window.open();  
            //win.document.write(conteudo);  
            //win.print();  
            //win.close();
        },
        init: function () {
            if ($rootScope.jornada.jornada12.isRedirectPrint){
                $timeout(this.print,1000);
            }
        }
    };
    jornada11.jornada11Manager.init();
}]);

