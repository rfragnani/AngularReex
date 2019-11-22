angular.module("reex").factory("datafactory", ['$http', '$q', '$log', '$rootScope', 'urlApiInternal', 'urlApiExternal', function ($http, $q, $log, $rootScope, urlApiInternal, urlApiExternal) {

    return { 
        listCep: listCep,
        propertyNew: propertyNew,
        signup: signup,
        signin: signin,
        update: update,
        listProperty: listProperty,
        listHomeEquity: listHomeEquity,
        accept: accept
     };

     function listHomeEquity(property) {

        var deferred = $q.defer();
        var options = {
            resource: 'mock/homeequity_i.txt'
        };
        queryDataMock(options).then(
            function (result) {
                deferred.resolve(result);
            },
            function (err) {
                deferred.reject(err);
            });
        return deferred.promise;
    }


    function listProperty(property) {

        var deferred = $q.defer();
        var options = {
            resource: 'mock/propertyId.txt'
        };
        queryDataMock(options).then(
            function (result) {
                deferred.resolve(result);
            },
            function (err) {
                deferred.reject(err);
            });
        return deferred.promise;
    }

    function listCep(cep) {

        var deferred = $q.defer();
        var options = {
            resource: 'mock/zip.txt'
        };
        queryDataMock(options).then(
            function (result) {
                deferred.resolve(result);
            },
            function (err) {
                deferred.reject(err);
            });
        return deferred.promise;
    }

    function accept(accept){
        var deferred = $q.defer();
        var options = {
            resource: 'mock/update.txt',
            data: update
        };
        queryDataMock(options).then(
            function (result) {
                deferred.resolve(result);
            },
            function (err) {
                deferred.reject(err);
            });
        return deferred.promise;
    }

      function update(update){
        var deferred = $q.defer();
        var options = {
            resource: 'mock/update.txt',
            data: update
        };
        queryDataMock(options).then(
            function (result) {
                deferred.resolve(result);
            },
            function (err) {
                deferred.reject(err);
            });
        return deferred.promise;
    }

    function propertyNew(newProperty){
        var deferred = $q.defer();
        var options = {
            resource: 'mock/propertyNew.txt',
            data: newProperty
        };
        queryDataMock(options).then(
            function (result) {
                deferred.resolve(result);
            },
            function (err) {
                deferred.reject(err);
            });
        return deferred.promise;
    }

    function signin(signin){
        var deferred = $q.defer();
        var options = {
            resource: 'mock/signin.txt',
            data: signin
        };
        queryDataMock(options).then(
            function (result) {
                deferred.resolve(result);
            },
            function (err) {
                deferred.reject(err);
            });
        return deferred.promise;
    }

    function signup(signup){
        var deferred = $q.defer();
        var options = {
            resource: 'mock/signup.txt',
            data: signup
        };
        queryDataMock(options).then(
            function (result) {
                deferred.resolve(result);
            },
            function (err) {
                deferred.reject(err);
            });
        return deferred.promise;
    }




/////////////////////////////////////////////////////////////////////

 
    /************************************ Private functions ****************************************/

    function queryData(options) {
        var deferred = $q.defer();
        var url =  options.resource; 
        $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        $http.get(url).then(
            function (result) {
                deferred.resolve(result);
            },
            function (err) {
                deferred.reject(err);
            });
        return deferred.promise;
    }

    function queryDataMock(url) {
        var deferred = $q.defer();
        $http.get(url.resource).then(
            function (result) {
                deferred.resolve(result);
            },
            function (err) {
                deferred.reject(err);
            });
        return deferred.promise;
    }

    function postData(options) {
        var deferred = $q.defer();
        var url =  options.resource;
        
        $http.post(url, options.data).then(
            function (result) {
                deferred.resolve(result);
            },
            function (err) {
                deferred.reject(err);

            });
        return deferred.promise;
    }

    function deleteData(options) {
        var deferred = $q.defer();
        var url = getUrlApi() + options.resource;
        if ($rootScope.accountLogin) {
            $http.defaults.headers.common.Authorization = $rootScope.accountLogin.token;

        }
        $http({
            method: 'DELETE',
            url: url,
            data: options.data,
            headers: {
                'Content-type': 'application/json;charset=utf-8'
            }
        }).then(function (result) {
            deferred.resolve(result);
        }, function (err) {
            deferred.reject(err);
        });

        return deferred.promise;
    }

    function getUrlApi() {
        if (window.location.hostname == "192.168.1.9") {
            return urlApiInternal;
        } else {
            return urlApiExternal;
        }
    }


}]);

