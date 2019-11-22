angular.module("reex", ["ui.bootstrap", "ui.router", "ngCookies",'ngAnimate','ngSanitize', 
 'datatables','multipleSelect','xeditable','uiSwitch','ngMaterial']);
"use strict";
angular.module("reex").config(["$stateProvider", "$urlRouterProvider", function(t, e) {
    e.otherwise("/jornada1"),
    //e.otherwise("/home"),
    t.state("jornada1", {
        url: "/jornada1",
        templateUrl: "templates/pages/jornada-1.html"
    }).state("jornada2", {
        url: "/jornada2",
        templateUrl: "templates/pages/jornada-2.html"
    }).state("jornada3", {
        url: "/jornada3",
        templateUrl: "templates/pages/jornada-3.html"
    }).state("jornada4", {
        url: "/jornada4",
        templateUrl: "templates/pages/jornada-4.html"
    }).state("jornada5", {
        url: "/jornada5",
        templateUrl: "templates/pages/jornada-5.html"
    }).state("jornada6", {
        url: "/jornada6",
        templateUrl: "templates/pages/jornada-6.html"
    }).state("jornada7", {
        url: "/jornada7",
        templateUrl: "templates/pages/jornada-7.html"
    }).state("jornada8", {
        url: "/jornada8",
        templateUrl: "templates/pages/jornada-8.html"
    }).state("jornada9", {
        url: "/jornada9",
        templateUrl: "templates/pages/jornada-9.html"
    }).state("jornada10", {
        url: "/jornada10",
        templateUrl: "templates/pages/jornada-10.html"
    }).state("jornada11", {
        url: "/jornada11",
        templateUrl: "templates/pages/jornada-11.html"
    }).state("jornada12", {
        url: "/jornada12",
        templateUrl: "templates/pages/jornada-12.html"
    }).state("jornada13", {
        url: "/jornada13",
        templateUrl: "templates/pages/jornada-13.html"
    }).state("jornadaBoasVindas", {
        url: "/jornadaBoasVindas",
        templateUrl: "templates/pages/jornada-boas-vindas.html"
    }).state("jornadaLogin", {
        url: "/jornadaLogin",
        templateUrl: "templates/pages/jornada-login.html"
    }).state("jornadaMeusDados", {
        url: "/jornadaMeusDados",
        templateUrl: "templates/pages/jornada-meus-dados.html"
    }).state("jornadaMeusImoveis", {
        url: "/jornadaMeusImoveis",
        templateUrl: "templates/pages/jornada-meus-imoveis.html"
    }).state("jornadaMinhaSenha", {
        url: "/jornadaMinhaSenha",
        templateUrl: "templates/pages/jornada-minha-senha.html"
    })
     
}
])
.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
})
.config(['$httpProvider', function ($httpProvider) {  
     $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
}])
//timer atualiza dash
.constant('updateColumn', 60000) 
//externa sky
// .constant('urlApiExternal', 'http://192.168.1.60:8086/') 
// // interna sky
// .constant('urlApiInternal', 'http://191.209.58.47:8086/') ;
//externa sky
.constant('urlApiExternal', 'http://191.209.58.47:8086/') 
// interna sky
.constant('urlApiInternal', 'http://192.168.1.9:8086/') ;
 