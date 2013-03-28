'use strict';
/*global angular */

angular.module('mathSkills.services')
    .service('courseData', [
        function () {
            var course = {
                title: 'CSKLS 371 GENERAL ARITHMETIC',
                children: [
                    {
                        title: '1 Whole Numbers',
                        path: 'whole-numbers',
                        children: [
                            {
                                title: '1.1 Place Value Number System of Whole Numbers',
                                path: '1.1-place-value-number-system-of-whole-numbers',
                                children: [
                                    {
                                        title: 'Whole Number Place Value',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\wholeplace{2000}{2}',
                                                answer: '\\select{2}{["Ones", "Tens", "Hundreds", "Thousands", "Ten Thousands", "Hundred Thousands", "Millions", "Ten Millions", "Hundred Millions", "Billions", "Ten Billions", "Hundred Billions"]}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }, {
                                            title: 'Workbook',
                                            children: [{
                                                problem: '\\str{Write seventy in number notation}',
                                                answer: '\\input{70}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }, {
                                                problem: '\\str{Write sixty in number notation}',
                                                answer: '\\input{60}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }, {
                                                problem: '\\str{Write fifty in number notation}',
                                                answer: '\\input{50}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }, {
                                                problem: '\\str{Write forty in number notation}',
                                                answer: '\\input{40}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }, {
                                                problem: '\\str{Write thirty in number notation}',
                                                answer: '\\input{30}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Words to Number',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\str{Write sixty in number notation}',
                                                answer: '\\input{60}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Words to Number #3',
                                        children: []
                                    },
                                    {
                                        title: 'Words to Number #4',
                                        children: []
                                    },
                                    {
                                        title: 'Words to Number #5',
                                        children: []
                                    },
                                    {
                                        title: 'Words to Number #6',
                                        children: []
                                    },
                                    {
                                        title: 'Words to Number #7',
                                        children: []
                                    },
                                    {
                                        title: 'Words to Number #8',
                                        children: []
                                    },
                                    {
                                        title: 'Words to Number #9',
                                        children: []
                                    },
                                    {
                                        title: 'Words to Number #10',
                                        children: []
                                    }
                                ]
                            },
                            {
                                title: '1.2 Standard Notation of Whole Numbers',
                                path: '1.2-standard-notation-of-whole-numbers',
                                children: [
                                    {
                                        title: 'Words to Number',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\str{Write eighty in number notation}',
                                                answer: '\\input{80}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }, {
                                            title: 'Workbook',
                                            children: [{
                                                problem: '\\str{Write seventy in number notation}',
                                                answer: '\\input{70}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }, {
                                                problem: '\\str{Write sixty in number notation}',
                                                answer: '\\input{60}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }, {
                                                problem: '\\str{Write fifty in number notation}',
                                                answer: '\\input{50}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }, {
                                                problem: '\\str{Write forty in number notation}',
                                                answer: '\\input{40}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }, {
                                                problem: '\\str{Write thirty in number notation}',
                                                answer: '\\input{30}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Words to Number',
                                        children: [{
                                            title: 'Main Answer',
                                            children: [{
                                                problem: '\\str{Write sixty in number notation}',
                                                answer: '\\input{60}',
                                                controls: {
                                                    "checkAnswer": true,
                                                    "help": true
                                                }
                                            }]
                                        }]
                                    },
                                    {
                                        title: 'Words to Number #3',
                                        children: []
                                    },
                                    {
                                        title: 'Words to Number #4',
                                        children: []
                                    },
                                    {
                                        title: 'Words to Number #5',
                                        children: []
                                    },
                                    {
                                        title: 'Words to Number #6',
                                        children: []
                                    },
                                    {
                                        title: 'Words to Number #7',
                                        children: []
                                    },
                                    {
                                        title: 'Words to Number #8',
                                        children: []
                                    },
                                    {
                                        title: 'Words to Number #9',
                                        children: []
                                    },
                                    {
                                        title: 'Words to Number #10',
                                        children: []
                                    }
                                ]
                            }							
                        ]
                    }, {
                        title: '2 Fractions',
                        path: 'fractions',
                        children: []
                    }, {
                        title: '3 Decimals',
                        path: 'decimals',
                        children: []
                    }, {
                        title: '4 Ratios & Proportions',
                        path: 'ratios-proportions',
                        children: []
                    }, {
                        title: '5 Percents',
                        path: 'percents',
                        children: []
                    }, {
                        title: '6 Measurements',
                        path: 'measurements',
                        children: []
                    }
                ]
            };

            var courseData = {
                getCourseData: function () {
                    return angular.copy(course);
                },
                getProblemData: function (unitPath, problemSetPath, problemNumber) {
                    var problemSet = courseData.getProblemSetData(unitPath, problemSetPath),
                        ret;

                    problemSet.children.forEach(function (problem, ii) {
                        if (ii + 1 === +problemNumber) {
                            ret = problem;
                        }
                    });

                    return ret;
                },
                getProblemSetData: function (unitPath, problemSetPath) {
                    var unit = courseData.getUnitData(unitPath),
                        ret;

                    unit.children.forEach(function (problemSet) {
                        if (problemSet.path === problemSetPath) {
                            ret = problemSet;
                        }
                    });

                    return ret;
                },
                getUnitData: function (unitPath) {
                    var ret;

                    course.children.forEach(function (unit) {
                        if (unit.path === unitPath) {
                            ret = unit;
                        }
                    });

                    return ret;
                },
                setCourseData: function (data) {
                    course = data;
                }
            };

            return courseData;
        }
    ]);
