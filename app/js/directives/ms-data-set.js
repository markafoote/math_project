'use strict';
/*global angular */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('set', {
            directiveTemplate: '<ms-data-set expected={{expected}} label=lable></ms-data-set>'
        });
    }])
    .directive('msDataSet', [
        'parser',
        '$compile',
        'problemData',
        function (parser, $compile, problemData) {
            return {
                controller: function ($scope, $element) {
                    // Extract the args array.
                    $scope.$watch('expected', function () {
                        if ($scope.expected){
                            $scope.myargs = parser.extractTag($scope.expected).args;
                        }
                    });

                    $scope.$on('answer', function (e, data) {
                        var val = parser.extractTag(data.answer).args[0]; //console.log('set answer', val);
                        if (data.result === "correct"){
                            problemData.setData(val, $scope.myargs[1]);
                        }
                    });
                },
                restrict: 'E',
                scope: {
                    expected: '@',
                    label: '@'
                },
                template: '<div><ms-expression expected={{myargs[0]}}></ms-expression></div>'
            };
        }
    ]);