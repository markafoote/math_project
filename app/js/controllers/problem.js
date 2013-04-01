'use strict';
/*global angular */

angular.module('mathSkills')
    .controller('problem', [
        'courseData',
        '$location',
        '$routeParams',
        '$scope',
        function (courseData, $location, $routeParams, $scope) {
            $scope.problem = courseData.getProblemData(
                $routeParams.unit,
                $routeParams.problemSet,
                $routeParams.problemNumber
            );
            $scope.mainAnswer = $scope.problem.children[0];
            $scope.workbook = $scope.problem.children[1];

            $scope.$on('problemDone', function () {
                var numberOfProblems = courseData.getNumberOfProblems($routeParams.unit, $routeParams.problemSet),
                    newPath = $location.path().split('/').slice(0, -1).join('/');

                if (+$routeParams.problemNumber + 1 <= numberOfProblems) {
                    newPath += '/' + (+$routeParams.problemNumber + 1);
                } else {
                    newPath += '/all/feedback';
                }
                $location.path(newPath);
            });

            $scope.$on('answer', function (e, data) {
                data.problemNumber = $routeParams.problemNumber;
            });
        }
    ]);