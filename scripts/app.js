var verbugator = angular.module('verbugator', []);


verbugator.factory('verbService', function ($http) {
    return {
        getVerbs: function (q, lang) {
           // var stem = verb.substr(0, verb.length - 2);
           // var verbType = verb.substr(verb.length - 2, 2);
            return [];
        },
        exists: function (v, lang) {
            $http.get('/json/verbs/' + lang + '.json').success(function (data) {
                console.log(data);
            });
        }
    };
});

verbugator.controller('SearchController', function ($scope, verbService) {
    
    $scope.languages =  { 'en' : 'english', 'sp' : 'spanish', 'fr' : 'french'}
          
    $scope.language = { selected: $scope.languages.en };

    $scope.search = function(q, lang) {       
        if (verbService.exists(q, lang)) {
            verbService.getVerb(q, lang);
        }
    };


});

verbugator.controller('VerbController', function ($scope) {
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