angular.module("reex").service("jornadaservice", ['$http', '$q', '$log', '$rootScope', 'datafactory', function ($http, $q, $log, $rootScope, datafactory) {

    return {
        loadCep: loadCep,
        propertyNew: propertyNew,
        signup: signup,
        signin: signin,
        update: update,
        loadPropertyId: loadPropertyId,
        loadHomeEquity: loadHomeEquity,
        accept: accept

    };

     function accept(termsAccept) {
       
        var deferred = $q.defer();
        datafactory.accept(termsAccept).then(
            function (update) {
                deferred.resolve(update);
            },
            function (err) {
                deferred.reject(err);
            });
        return deferred.promise;

    }

    function loadHomeEquity(homeEquity) {

        var deferred = $q.defer();
        datafactory.listHomeEquity(homeEquity).then(
            function (homeEquity) {
                deferred.resolve(homeEquity);
            },
            function (err) {
                deferred.reject(err);
            });
        return deferred.promise;

    }


    function loadCep(cep) {

        var deferred = $q.defer();
        datafactory.listCep(cep).then(
            function (address) {
                deferred.resolve(address);
            },
            function (err) {
                deferred.reject(err);
            });
        return deferred.promise;

    }

    function update(update) {
        var updateRq = updateBuilder(update);
        var deferred = $q.defer();
        datafactory.update(updateRq).then(
            function (update) {
                deferred.resolve(update);
            },
            function (err) {
                deferred.reject(err);
            });
        return deferred.promise;

    }


    function signin(signin) {
        var signinRq = signinBuilder(signin);
        var deferred = $q.defer();
        datafactory.signin(signinRq).then(
            function (signin) {
                deferred.resolve(signin);
            },
            function (err) {
                deferred.reject(err);
            });
        return deferred.promise;

    }

    function propertyNew(newProperty) {
        var newPropertyRq = newPropertyBuilder(newProperty);
        var deferred = $q.defer();
        datafactory.propertyNew(newPropertyRq).then(
            function (newProperty) {
                deferred.resolve(newProperty);
            },
            function (err) {
                deferred.reject(err);
            });
        return deferred.promise;

    }


    function signup(signup) {
        var signupRq = signupBuilder(signup);
        var deferred = $q.defer();
        datafactory.signup(signup).then(
            function (newProperty) {
                deferred.resolve(newProperty);
            },
            function (err) {
                deferred.reject(err);
            });
        return deferred.promise;

    }

    
    function loadPropertyId(property) { 
        var deferred = $q.defer();
        datafactory.listProperty(property).then(
            function (newProperty) {
                deferred.resolve(newProperty);
            },
            function (err) {
                deferred.reject(err);
            });
        return deferred.promise;

    }



    function loadCep(cep) {

        var deferred = $q.defer();
        datafactory.listCep(cep).then(
            function (address) {
                deferred.resolve(address);
            },
            function (err) {
                deferred.reject(err);
            });
        return deferred.promise;

    }






    /************************************ Private functions ****************************************/


    function newPropertyBuilder(property) {
        let newProperty = {
            "zip": property.jornada3.cep,
            "neighborhood": property.jornada3.bairro,
            "city": property.jornada3.localidade,
            "state": property.jornada3.uf,
            "street": property.jornada3.logradouro,
            "number": property.jornada3.numero,
            "country": "Brasil",
            "type": property.jornada1.imovelSelecionado,
            "bedrooms": property.jornada2.dormitorios,
            "parking": property.jornada2.vagas,
            "area": property.jornada2.metrosTerreno,
            "buildingArea": property.jornada2.metrosConstruidos,
            "bathrooms": property.jornada2.banheiros,
            "suites": property.jornada2.suites
        };
        return newProperty;
    }

    function signupBuilder(signup) {
        let newSignup = {
            "email": signup.jornada4.email,
            "name": signup.jornada4.nome,
            "id": signup.jornada3.responseData.clientId
        };
        return newSignup;
    }

    function signinBuilder(signin) {
        let newSignin = {
            "email": signin.jornadaLogin.email,
            "password": signin.jornadaLogin.senha
        };
        return newSignin;
    }

    function updateBuilder(update) {
        let newUpdate = {
            "phone": update.jornada7.telefone,
            "taxid": update.jornada7.cpf
        };
        return newUpdate;
    }


}]);

