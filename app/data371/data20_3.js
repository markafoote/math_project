/*global angular */

angular.module('mathSkills').service('data20_3', function () {
    var ret = {
            title: '20.3 Percent Proportion Applications',
            path: '20.3-percent-proportion-applications',
            children: []
        },
        template = {
            main: {
                
                title: 'Percent Proportion Applications',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\html{$problem<br><br><span class=blue-text>$round</span>}',
                        answer: '\\input{$answer}',
                        controls: {
                            "checkAnswer": true,
                            "help": false,
                            "workbook": true
                        }
                    }]
                }, {
                    title: 'Workbook',
                    children: [{
                        problem: '\\html{$problem<br><br><span class=blue-text>$round</span>}',
                        answer: '\\wb{\\rowgrp{'+
                            '\\ins{Set up a percent proportion to solve the problem (use "X" for an unknown value).}'+
                        '}{'+
                            '\\grp'+
                            '{\\frac{\\input{[\"$$ln\",\"$$rn\"]}}{\\input{[\"$$ld\",\"$$rd\"]}}}'+
                            '{\\sign{=}}'+
                            '{\\frac{\\input{[\"$$rn\",\"$$ln\"]}}{\\input{[\"$$rd\",\"$$ld\"]}}}'+
                        '}}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{$problem<br><br><span class=blue-text>$round</span>}',
                        answer: '\\wb{\\rowgrp{'+
                            '\\choose{[\\html{},\\ins{The standard percent proportion is set up as follows:}]}{$$previousCorrect}'+
                        '}{'+
                            '\\css{\\choose{[\\html{},\\grp{\\frac{\\str{$$dln}}{\\str{$$dld}}}{\\sign{=}}{\\frac{\\str{$$drn}}{\\str{$$drd}}}]}{$$previousCorrect}}{bottom-marg}'+
                        '}{'+
                            '\\choose{[\\ins{Yes!},\\ins{$xtext We substitute the given values to get:}]}{$$previousCorrect}'+
                        '}{'+
                            '\\css{\\grp{\\frac{\\str{$$ln}}{\\str{$$ld}}}{\\sign{=}}{\\frac{\\str{$$rn}}{\\str{$$rd}}}}{bottom-marg}'+
                        '}{'+
                            '\\ins{Now solve the problem.}'+
                        '}{'+
                            '\\css{\\grp{\\html{X}}{\\sign{=}}{\\input{$$answer}}}{proportion-application}'+
                        '}}{well}{end}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }, {
                        problem: '\\html{$problem<br><br><span class=blue-text>$round</span>}',
                        answer: '\\wb{\\rowgrp{'+
                            '\\css{\\choose{[\\html{},\\grp{\\frac{\\str{$$ln}}{\\str{$$ld}}}{\\sign{=}}{\\frac{\\str{$$rn}}{\\str{$$rd}}}]}{$$previousCorrect}}{bottom-marg}'+
                        '}{'+
                            '\\choose{[\\ins{Congratulations!},\\ins{The correct answer is found by following the process to solve all proportion problems.}]}{$$previousCorrect}'+
                        '}{'+
                            '\\choose{[\\grp{\\frac{\\str{$$answer}}{\\str{$$ld}}}{\\sign{=}}{\\frac{\\str{$$rn}}{\\str{$$rd}}},\\css{\\grp{\\html{X}}{\\sign{=}}{\\html{$solution}}}{proportion-application}]}{$$previousCorrect}'+
                        '}{'+
                            '\\choose{[\\html{},\\ins{The answer is}]}{$$previousCorrect}'+
                        '}{'+
                            '\\choose{[\\html{},\\css{\\grp{\\html{$$answer}}{\\html{$$post_symbol}}}{proportion-application}]}{$$previousCorrect}'+
                        '}}{well}',
                        controls: {
                            "checkAnswer": true,
                            "help": true
                        }
                    }]
                }]
            }
        },
        data = [
            {  //1a -1
                problem: 'May received a grade of 70% on her first math exam. If there were 50 questions on the exam, how many questions did she answer correctly?',
                round: '',
                xtext:'',
                answer: '35', template: 'main', post_symbol: ' questions',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '70', rn: 'x', 
                ld: '100', rd: '50', 
                solution: '$$ln &#149; $$rd &#247; $$ld',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //1b -2
                problem: 'May received a grade of 70% on her first math exam. If she correctly answered 35 questions, how many questions were on the exam?',
                round: '',
                xtext:'',
                answer: '50', template: 'main', post_symbol: ' questions',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '70', rn: '35', 
                ld: '100', rd: 'x', 
                solution: '$$ld &#149; $$rn &#247; $$ln',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //1c -3
                problem: 'Out of 50 questions on her math exam, May correctly answered 35 questions. What percent of the questions did she answer correctly?',
                round: '',
                xtext:'',
                answer: '70', template: 'main', post_symbol: '%',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '35', 
                ld: '100', rd: '50', 
                solution: '$$ld &#149; $$rn &#247; $$rd',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            
            {  //2a -4
                problem: 'A 40 liter container holds a mixture of acid and water. If 60% of this mixture is acid, how many liters of acid does the container have?',
                round: '',
                xtext:'',
                answer: '24', template: 'main', post_symbol: ' liters',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '60', rn: 'x', 
                ld: '100', rd: '40', 
                solution: '$$ln &#149; $$rd &#247; $$ld',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //2b -5
                problem: 'A solution of acid and water is 60% acid. If the are 24 liters of acid, how many liters of this solution are in the container?',
                round: '',
                xtext:'',
                answer: '40', template: 'main', post_symbol: ' liters',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '60', rn: '24', 
                ld: '100', rd: 'x', 
                solution: '$$ld &#149; $$rn &#247; $$ln',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //2c -6
                problem: 'A 40-liter container holds a mixture of acid and water. If there are 24 liters of acid, what percent of the solution is acid?',
                round: '',
                xtext:'',
                answer: '60', template: 'main', post_symbol: '%',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '24', 
                ld: '100', rd: '40', 
                solution: '$$ld &#149; $$rn &#247; $$rd',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            
            {  //3a -7
                problem: 'In a survey of 400 people, 78% said that they are currently recycling paper. How many people in this group are currently recycling paper?',
                round: '',
                xtext:'',
                answer: '312', template: 'main', post_symbol: ' people',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '78', rn: 'x', 
                ld: '100', rd: '400', 
                solution: '$$ln &#149; $$rd &#247; $$ld',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //3b -8
                problem: '78% of the people in a survey said that they are currently recycling paper. If 312 people said that they are currently recycling paper, how many people participated in the survey?',
                round: '',
                xtext:'',
                answer: '400', template: 'main', post_symbol: ' people',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '78', rn: '312', 
                ld: '100', rd: 'x', 
                solution: '$$ld &#149; $$rn &#247; $$ln',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //3c -9
                problem: 'In a survey 312 out of 400 people said that they currently recycle paper. What percent of the people said that they are recycling?',
                round: '',
                xtext:'',
                answer: '78', template: 'main', post_symbol: '%',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '312', 
                ld: '100', rd: '400', 
                solution: '$$ld &#149; $$rn &#247; $$rd',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            
            {  //4a -10
                problem: 'It is estimated that 30% of the spectators at a baseball game will buy refreshments. If there were 2,500 spectators at a game, how many could be expected to buy refreshments?',
                round: '',
                xtext:'',
                answer: '750', template: 'main', post_symbol: ' spectators',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '30', rn: 'x', 
                ld: '100', rd: '2500', 
                solution: '$$ln &#149; $$rd &#247; $$ld',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //4b -11
                problem: 'It is estimated that 30% of the spectators at a baseball game will buy refreshments. If 750 spectators bought refreshments, about how many spectators attended the baseball game?',
                round: '',
                xtext:'',
                answer: '2500', template: 'main', post_symbol: ' spectators',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '30', rn: '750', 
                ld: '100', rd: 'x', 
                solution: '$$ld &#149; $$rn &#247; $$ln',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //4c -12
                problem: 'There were 2,500 spectators at a baseball game. If 750 of the spectators bought refreshments, what percent of the spectators bought refreshments?',
                round: '',
                xtext:'',
                answer: '30', template: 'main', post_symbol: '%',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '750', 
                ld: '100', rd: '2500', 
                solution: '$$ld &#149; $$rn &#247; $$rd',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            
            {  //5a -13
                problem: 'In a recent election for mayor, Candidate A received 54% of the votes which were cast. If 5,200 votes were cast, how many votes did Candidate A receive?',
                round: '',
                xtext:'',
                answer: '2808', template: 'main', post_symbol: ' votes',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '54', rn: 'x', 
                ld: '100', rd: '5200', 
                solution: '$$ln &#149; $$rd &#247; $$ld',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //5b -14
                problem: 'In a recent election for mayor, Candidate A received 2,808 votes. If this represented 54% of the votes, how many votes were cast in total?',
                round: '',
                xtext:'',
                answer: '5200', template: 'main', post_symbol: ' votes',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '54', rn: '2808', 
                ld: '100', rd: 'x', 
                solution: '$$ld &#149; $$rn &#247; $$ln',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //5c -15
                problem: 'In a recent election for mayor, Candidate A received 2,808 votes out of a total of 5,200 votes cast. What percent of the votes did Candidate A receive?',
                round: '',
                xtext:'',
                answer: '54', template: 'main', post_symbol: '%',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '2808', 
                ld: '100', rd: '5200', 
                solution: '$$ld &#149; $$rn &#247; $$rd',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            
            {  //6a -16
                problem: 'Santa Rosa normally gets about 30 inches of rain per year. Last year it received 140% of its normal amount. How many inches of rain did Santa Rosa receive last year?',
                round: '',
                xtext:'',
                answer: '42', template: 'main', post_symbol: ' inches',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '140', rn: 'x', 
                ld: '100', rd: '30', 
                solution: '$$ln &#149; $$rd &#247; $$ld',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //6b -17
                problem: 'Santa Rosa received 42 inches of rain last year. That was 140% of its normal annual rainfall. How many inches of rain does Santa Rosa get in a normal year?',
                round: '',
                xtext:'',
                answer: '30', template: 'main', post_symbol: ' inches',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '140', rn: '42', 
                ld: '100', rd: 'x', 
                solution: '$$ld &#149; $$rn &#247; $$ln',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //6c -18
                problem: 'Santa Rosa normally gets about 30 inches of rain per year, but last year it got 42 inches. Last year’s rainfall is what percent of a normal year’s amount of rain?',
                round: '',
                xtext:'',
                answer: '140', template: 'main', post_symbol: '%',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '42', 
                ld: '100', rd: '30', 
                solution: '$$ld &#149; $$rn &#247; $$rd',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            
            {  //7a -19
                problem: 'The drive home from college was about 540 miles. If Jerry had driven 20% of this distance, how far had he traveled so far?',
                round: '',
                xtext:'',
                answer: '108', template: 'main', post_symbol: ' miles',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '20', rn: 'x', 
                ld: '100', rd: '540', 
                solution: '$$ln &#149; $$rd &#247; $$ld',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //7b -20
                problem: 'Jerry had driven 108 miles in two hours. If this represented 20% of the distance he had to travel to get home from college, what was the full distance from college to his home?',
                round: '',
                xtext:'',
                answer: '540', template: 'main', post_symbol: ' miles',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '20', rn: '108', 
                ld: '100', rd: 'x', 
                solution: '$$ld &#149; $$rn &#247; $$ln',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //7c -21
                problem: 'Jerry’s drive home from college was 540 miles. If he had driven 108 miles already, what percent of his drive home was completed?',
                round: '',
                xtext:'',
                answer: '20', template: 'main', post_symbol: '%',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '108', 
                ld: '100', rd: '540', 
                solution: '$$ld &#149; $$rn &#247; $$rd',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            
            {  //8a -22
                problem: 'A grocery store had 160 pounds of bananas. If it had sold 90% of the bananas in three hours, how many pounds of bananas had it sold?',
                round: '',
                xtext:'',
                answer: '144', template: 'main', post_symbol: ' pounds',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '90', rn: 'x', 
                ld: '100', rd: '160', 
                solution: '$$ln &#149; $$rd &#247; $$ld',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //8b -23
                problem: 'A grocery store sold 144 pounds of bananas in three hours. If this represented 90% of the bananas in the store, how many pounds of bananas did the store have originally?',
                round: '',
                xtext:'',
                answer: '160', template: 'main', post_symbol: ' pounds',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '90', rn: '144', 
                ld: '100', rd: 'x', 
                solution: '$$ld &#149; $$rn &#247; $$ln',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //8c -24
                problem: 'A grocery store sold 144 pounds of bananas out of the original 160 pounds of bananas which the store had in the morning. What percent of the store’s banana’s were sold?',
                round: '',
                xtext:'',
                answer: '90', template: 'main', post_symbol: '%',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '144', 
                ld: '100', rd: '160', 
                solution: '$$ld &#149; $$rn &#247; $$rd',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            
            {  //9a -25
                problem: 'A manufacturing company was hiring a total of 60 people. The company had already hired 75% of its new employees (meaning that 25% of the new employees still had to be hired). How many more people would the company still hire?',
                round: '',
                xtext:'',
                answer: '15', template: 'main', post_symbol: ' people',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '25', rn: 'x', 
                ld: '100', rd: '60', 
                solution: '$$ln &#149; $$rd &#247; $$ld',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //9b -26
                problem: 'A manufacturing company had plans to hire another 15 people. They had already hired 75% of the total number of new employees that they wanted to hire (meaning that 25% of the new employees still had to be hired). How many people was the company planning to hire in total?',
                round: '',
                xtext:'',
                answer: '60', template: 'main', post_symbol: ' people',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '25', rn: '15', 
                ld: '100', rd: 'x', 
                solution: '$$ld &#149; $$rn &#247; $$ln',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //9c -27
                problem: 'A manufacturing company had hired 45 people already. Its goal was to hire 60 people in total. What percent of the new employees which it wanted to hire still had not yet been hired?',
                round: '',
                xtext:'We get the Amount (Part Quantity) by subtracting the number of people already hired from the total number of people the company plans to hire.<br><br>',
                answer: '25', template: 'main', post_symbol: '%',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '15', 
                ld: '100', rd: '60', 
                solution: '$$ld &#149; $$rn &#247; $$rd',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            
            {  //10a -28
                problem: 'A small dairy farm had 80 cows. 45% of the cows had already been milked one morning (meaning that 55% of the cows still had to be milked). How many cows still had to be milked?',
                round: '',
                xtext:'',
                answer: '44', template: 'main', post_symbol: ' cows',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '55', rn: 'x', 
                ld: '100', rd: '80', 
                solution: '$$ln &#149; $$rd &#247; $$ld',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //10b -29
                problem: 'On a small dairy farm 55% of the cows still had to be milked one morning (meaning that 45% of the cows had already been milked). If 36 cows had already been milked, how many cows were there in total on the farm?',
                round: '',
                xtext:'',
                answer: '80', template: 'main', post_symbol: ' cows',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: '45', rn: '36', 
                ld: '100', rd: 'x', 
                solution: '$$ld &#149; $$rn &#247; $$ln',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            },
            {  //10c -30
                problem: 'On a small farm, 36 cows had already been milked out of a total of 80 cows. What percent of the cows still had to be milked?',
                round: '',
                xtext:'We get the Amount (Part Quantity) by subtracting the number of cows already milked from the total number of cows.<br><br>',
                answer: '55', template: 'main', post_symbol: '%',
                dln: '%', drn: 'Amount (Part Quantity)', 
                dld: '100', drd: 'Base (Whole Quantity)',
                ln: 'x', rn: '44', 
                ld: '100', rd: '80', 
                solution: '$$ld &#149; $$rn &#247; $$rd',
                previousCorrect: true,
                flip: [[1], ["ln", "rn"], ["ld", "rd"]],
            } 
        ],
        interpolate = function (obj, data) {
            var string = JSON.stringify(obj);
            for (var symbol in data) {
                if (data.hasOwnProperty(symbol)) {
                    string = string.replace(new RegExp('(\\$)?\\$' + symbol, 'g'), function ($0, $1) { return $1?$0 : data[symbol]; }); //console.log(string); 
                }
            }
            var ret = JSON.parse(string);
            ret.data = angular.copy(data);
            return ret;
        };

    ret.children = data.map(function (problem) {
        return interpolate(template[problem.template], problem);
    });
    
    return ret;
});
