var verbugator = angular.module('verbugator', []);

verbugator.config(function ($routeProvider, $routeProvider, $locationProvider) {

    $routeProvider.when('/verb/es/hablar', {
        templateUrl: '/views/es.html',
        controller: SpanishController
    });
 
    // configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode(true);
});

verbugator.factory('verbService', function ($http) {
    return {
        getVerbs: function (q, lang) {
            var stem = verb.substr(0, verb.length - 2);
            var verbType = verb.substr(verb.length - 2, 2);
            return [];
        },
        exists: function (v, lang) {
           /* $http.get('/json/verbs/' + lang + '.json').success(function (data) {
                console.log(data);
            });*/
            return true;
        }
    };
});

verbugator.controller('MainController', function ($scope) {

    $scope.verbobj = { 'verb': '', 'lang': '' };

});

verbugator.controller('SearchController', function ($scope, verbService, $location) {

    $scope.languages = { 'en': 'english', 'es': 'spanish', 'fr': 'french' };

    $scope.language = { selected: $scope.languages.en };




    $scope.search = function (q, lang) {

        $scope.verbobj.verb = q;
        $scope.verbobj.lang = lang;
        $location.path('/verb/' + $scope.verbobj.lang + '/' + $scope.verbobj.verb);

    };
});

verbugator.controller('SpanishController', function ($scope) {

    $scope.verbStem = $scope.verbobj.verb.substr(0, $scope.verbobj.verb.length - 2);

    $scope.verbs = {
        'VERB': 'AR',
        'TENSES': {
            'INDICATIVE': {
                'PRESENT': ['a', 'as', 'a', 'amos', '�is', 'an'],
                'PAST': ['�', 'aste', '�', 'amos', 'asteis', 'aron'],
                'IMPERFECT': ['aba', 'abas', 'aba', '�bamos', '�bais', 'aban'],
                'FUTURE': ['�', '�s', '�', 'emos', '�is', '�n'],
                'CONDITIONAL': ['�a', '�as', '�a', '�amos', '�ais', '�an']
            },

            'SUBJUNCTIVE': {
                'PRESENT': ['e', 'es', 'e', 'emos', '�is', 'en'],
                'PAST': [['ara', 'aras', 'ara', '�ramos', '�rais', 'aran'], ['ara', 'aras', 'ara', '�ramos', '�rais', 'aran']]
            }

        }
    };
});

