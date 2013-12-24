var verbugator = angular.module('verbugator', []);



verbugator.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/verb/:lang/:verb', {
        templateUrl: '/views/lang.html',
        controller: BookCntl,
        resolve: {
            // I will cause a 1 second delay
            delay: function($q, $timeout) {
                var delay = $q.defer();
                $timeout(delay.resolve, 1000);
                return delay.promise;
            }
        }

        //empty template on / start up? verb empty?
        // when('/', {templateUrl: '/templates/home.html', controller: HomeController}).
        //when template: '<div>empty...</div>'
    });
    $routeProvider.when('/Book/:bookId/ch/:chapterId', {
        templateUrl: 'chapter.html',
        controller: ChapterCntl
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

verbugator.controller('SearchController', function ($scope, verbService, $location) {
    
    $scope.languages = { 'en': 'english', 'sp': 'spanish', 'fr': 'french' };
          
    $scope.language = { selected: $scope.languages.en };

    $scope.search = function(q, lang) {       
        if (verbService.exists(q, lang)) {
            verbService.getVerb(q, lang);
            $location.path('/verb/' + lang + '/' + q);
        }
    };
});

verbugator.controller('SpanishController', function ($scope) {
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

verbugator.controller('FrenchController', function ($scope) {
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