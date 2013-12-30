'use strict';

/* Controllers */

angular.module('myApp.controllers', []).

    controller('SearchController', function ($scope, $location) {

        $scope.languages = { 'en': 'english', 'es': 'spanish', 'fr': 'french' };
        $scope.language = { selected: $scope.languages.en };
        $scope.search = function (q, lang) {
            $scope.verbobj.verb = q;
            $scope.verbobj.lang = lang;
            $location.path('/verb/' + $scope.verbobj.lang + '/' + $scope.verbobj.verb);
        };
    })

    .controller('MainController', function ($scope) {
        $scope.verbobj = { 'verb': '', 'lang': '' };
    })

    .controller('SpanishController', function ($scope, $sce) {
        $scope.verbStem = $scope.verbobj.verb.substr(0, $scope.verbobj.verb.length - 2);
        $scope.verbEnding = $scope.verbobj.verb.substr($scope.verbobj.verb.length - 2, 2).toUpperCase();
        $scope.verbs = {
            'AR': {
                'INDICATIVE': {
                    'PRESENT': ['o', 'as', 'a', 'amos', '&aacute;is', 'an'],
                    'PAST': ['&eacute;', 'aste', '&oacute;', 'amos', 'asteis', 'aron'],
                    'IMPERFECT': ['aba', 'abas', 'aba', '&aacute;bamos', '&aacute;bais', 'aban'],
                    'FUTURE': ['&eacute;', '&aacute;s', '&aacute;', 'emos', '&eacute;is', '&aacute;n'],
                    'CONDITIONAL': ['&iacute;a', '&iacute;as', '&iacute;a', '&iacute;amos', '&iacute;ais', '&iacute;an']
                },
                'SUBJUNCTIVE': {
                    'PRESENT': ['e', 'es', 'e', 'emos', '&eacute;is', 'en'],
                    'PAST': ['ara', 'aras', 'ara', '&aacute;ramos', 'arais', 'aran']
                }
            },

            'ER': {
                'INDICATIVE': {
                    'PRESENT': ['o', 'es', 'e', 'emos', '&eacute;is', 'en'],
                    'PAST': ['&iacute;', 'iste', 'i&oacute;', 'imos', 'isteis', 'ieron'],
                    'IMPERFECT': ['&iacute;a', '&iacute;as', '&iacute;a', '&iacute;amos', '&iacute;ais', '&iacute;an'],
                    'FUTURE': ['&eacute;', '&aacute;s', '&aacute;', 'emos', '&eacute;is', '&aacute;n'],
                    'CONDITIONAL': ['&iacute;a', '&iacute;as', '&iacute;a', '&iacute;amos', '&iacute;ais', '&iacute;an']
                },
                'SUBJUNCTIVE': {
                    'PRESENT': ['a', 'as', 'a', 'amos', '&aacute;is', 'an'],
                    'PAST': ['iera', 'ieras', 'iera', 'i&eacute;ramos', 'ierais', 'ieran']
                }
            },

            'IR': {
                'INDICATIVE': {
                    'PRESENT': ['o', 'es', 'e', 'imos', '&iacute;s', 'en'],
                    'PAST': ['&iacute;', 'iste', 'i&oacute;', 'imos', 'isteis', 'ieron'],
                    'IMPERFECT': ['&iacute;a', '&iacute;as', '&iacute;a', '&iacute;amos', '&iacute;ais', '&iacute;an'],
                    'FUTURE': ['&eacute;', '&aacute;s', '&aacute;', 'emos', '&eacute;is', '&aacute;n'],
                    'CONDITIONAL': ['&iacute;a', '&iacute;as', '&iacute;a', '&iacute;amos', '&iacute;ais', '&iacute;an']
                },
                'SUBJUNCTIVE': {
                    'PRESENT': ['a', 'as', 'a', 'amos', '&aacute;is', 'an'],
                    'PAST': ['iera', 'ieras', 'iera', 'i&eacute;ramos', 'ierais', 'ieran']
                }
            }

        };
        $scope.tables = $scope.verbs[$scope.verbEnding];
    });