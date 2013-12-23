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
                'PRESENT': ['a', 'as', 'a', 'amos', 'áis', 'an'],
                'PAST': ['é', 'aste', 'ó', 'amos', 'asteis', 'aron'],
                'IMPERFECT': ['aba', 'abas', 'aba', 'ábamos', 'ábais', 'aban'],
                'FUTURE': ['é', 'ás', 'á', 'emos', 'éis', 'án'],
                'CONDITIONAL': ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían']
            },

            'SUBJUNCTIVE': {
                'PRESENT': ['e', 'es', 'e', 'emos', 'éis', 'en'],
                'PAST': [['ara', 'aras', 'ara', 'áramos', 'árais', 'aran'], ['ara', 'aras', 'ara', 'áramos', 'árais', 'aran']]
            }

        }
    };
});