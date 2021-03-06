/*global angular */

angular.module('mathSkills').service('data_e_3', ['dataUtils', function (dataUtils) {
    var desc = {
            title: 'E.3 Division of Fractions',
            path: 'E.3-division-of-fractions',
            children: []
        },
        template = {
            two: {
                title: 'Division of Fractions',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\row{\\html{Solve &nbsp;}}{\\frac{\\str{$n1}}{\\str{$d1}}}{\\sign{&divide;}}{\\frac{\\str{$n2}}{\\str{$d2}}}',
                        answer: '\\frac{\\input{$na}}{\\input{$da}}',
                        controls: {
                            "checkAnswer": true,
                            "help": false,
                            "workbook": true
                        }
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
                        problem: '\\rowgrp{\\row{\\frac{\\str{$n1}}{\\str{$d1}}}{\\sign{&divide;}}{\\frac{\\str{$n2}}{\\str{$d2}}}}{\\row{\\str{Rewrite the problem as the product of the fractions.}}}',
                        answer: '\\grp{\\frac{\\input{$n1}}{\\input{$d1}}}{\\sign{&times;}}{\\frac{\\input{$d2}}{\\input{$n2}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\col'+
                                '{\\str{Reduce the fractions by canceling.}}' +
                                '{\\row{\\frac{\\str{$n1}}{\\str{$d1}}}{\\sign{&times;}}{\\frac{\\str{$d2}}{\\str{$n2}}}}',
                        answer: '\\cancelfracs{[$n1,$d1]}{[$d2,$n2]}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\str{Multiply the fractions together.}',
                        answer: '\\multiplyfracs{\\frac{\\str{$$n1}}{\\str{$$d1}}}{\\frac{\\str{$$n2}}{\\str{$$d2}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            },
            three: {
                title: 'Dividing Fractions',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\row{\\html{Solve &nbsp;}}{\\frac{\\str{$n1}}{\\str{$d1}}}{\\sign{&divide;}}{\\frac{\\str{$n2}}{\\str{$d2}}}{\\sign{&divide;}}{\\frac{\\str{$n3}}{\\str{$d3}}}',
                        answer: '\\frac{\\input{$na}}{\\input{$da}}',
                        controls: {
                            "checkAnswer": true,
                            "help": false,
                            "workbook": true
                        }
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
                        problem: '\\rowgrp{\\row{\\frac{\\str{$n1}}{\\str{$d1}}}{\\sign{&divide;}}{\\frac{\\str{$n2}}{\\str{$d2}}}{\\sign{&divide;}}{\\frac{\\str{$n3}}{\\str{$d3}}}}{\\row{\\str{Rewrite the problem as the product of the fractions.}}}',
                        answer: '\\grp{\\frac{\\input{$n1}}{\\input{$d1}}}{\\sign{&times;}}{\\frac{\\input{$d2}}{\\input{$n2}}}{\\sign{&times;}}{\\frac{\\input{$d3}}{\\input{$n3}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\col'+
                                '{\\str{Reduce the fractions by canceling.}}' +
                                '{\\row{\\frac{\\str{$n1}}{\\str{$d1}}}{\\sign{&times;}}{\\frac{\\str{$d2}}{\\str{$n2}}}{\\sign{&times;}}{\\frac{\\str{$d3}}{\\str{$n3}}}}',
                        answer: '\\cancelfracs{[$n1,$d1]}{[$d2,$n2]}{[$d3,$n3]}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\str{Multiply the fractions together.}',
                        answer: '\\multiplyfracs{\\frac{\\str{$$n1}}{\\str{$$d1}}}{\\frac{\\str{$$n2}}{\\str{$$d2}}}{\\frac{\\str{$$n3}}{\\str{$$d3}}}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            }
        },
        data = [
            { n1: 1, d1: 2, n2: 2, d2: 3, na: 3, da: 4, template: 'two' },
            { n1: 5, d1: 10, n2: 4, d2: 2, na: 1, da: 4, template: 'two' },
            { n1: 7, d1: 6, n2: 7, d2: 3, na: 1, da: 2, template: 'two' },          
            { n1: 10, d1: 3, n2: 12, d2: 11, na: 55, da: 18, template: 'two' },
            { n1: 24, d1: 34, n2: 12, d2: 10, na: 10, da: 17, template: 'two' },
			{ n1: 2, d1: 9, n2: 5, d2: 3, na: 2, da: 15, template: 'two' },
            { n1: 18, d1: 27, n2: 23, d2: 21, na: 14, da: 23, template: 'two' },
            { n1: 2, d1: 4, n2: 12, d2: 8, n3: 24, d3: 18, na: 1, da: 4, template: 'three' },
            { n1: 27, d1: 14, n2: 28, d2: 21, n3: 9, d3: 12, na: 27, da: 14, template: 'three' },
            { n1: 5, d1: 10, n2: 27, d2: 32, n3: 8, d3: 10, na: 20, da: 27, template: 'three' }
        ];

    return dataUtils.build(desc, template, data);
}]);
