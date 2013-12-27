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

