/*global angular */

angular.module('mathSkills').service('data17_3', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '17.3 Finding Unit Rates',
			path: '17.3-finding-unit-rates',
            children: []
        },
        template = {
			main: {
                title: 'Finding Unit Rates',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '\\col{\\row{\\str{$instructions}}}{\\row{\\html{&nbsp;}}}{\\row{\\html{$quantityLabel1 $label1 per $quantityLabel2 $label2}}}',
						answer: '\\butgrp'
						+'{\\col{\\row{\\html{&nbsp;}}}'
						+'{\\row{\\but{A}{$buttonValueA}}'
						+'{\\grp{\\html{\xA0 \xA0 $buttonLabelA $label3 per $label4}}}}'
						+'{\\row{\\but{B}{$buttonValueB}}'
						+'{\\grp{\\html{\xA0 \xA0 $buttonLabelB $label3 per $label4}}}}'
						+'{\\row{\\but{C}{$buttonValueC}}'
						+'{\\grp{\\html{\xA0 \xA0 $buttonLabelC $label3 per $label4}}}}'
						+'{\\row{\\but{D}{$buttonValueD}}'
						+'{\\grp{\\html{\xA0 \xA0 $buttonLabelD $label3 per $label4}}}}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\html{&nbsp;}}'
							+'{\\str{The stated ratio is:}}'	
							+'{\\html{&nbsp;}}'
							+'{\\frac{\\grp{\\str{$quantityLabel1}}{\\html{$label1}}}{\\grp{\\str{$quantityLabel2}}{\\html{$label2}}}}'	
							+'{\\html{&nbsp;}}'
							+'{\\row{\\str{$quantityLabel1}}{\\sign{&divide;}}{\\str{$quantityLabel2}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\str{$answer}}{\\html{$rounded}}}'
							+'{\\html{&nbsp;}}'
							+'{\\row{\\css{\\str{Answer: \xA0 }}{help-answer-text}}'
							+'{\\css{\\row{\\str{ ($buttonLetter) \xA0 }}'
							+'{\\html{$answer $label3 per $label4}}}{help-answer-text-tight}}}'
							+'{\\row{\\html{&nbsp;}}}'
						}
					}]
                }]
            },
			fractional: {
                title: 'Finding Unit Rates',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '\\col'
						+'{\\row{\\str{$instructions}}}'
						+'{\\row{\\html{&nbsp;}}}'
						+'{\\row{\\mixed{\\html{$startWholePart}}{frac{\\str{$startNumerator}}{\\str{$startDenominator}}}}'
						+'{\\html{$label1 $comparison $quantityLabel2 $label2}}}',
						answer: '\\butgrp'
						+'{\\col{\\row{\\html{&nbsp;}}}'
						+'{\\row{\\but{A}{$buttonValueA}}'
						+'{\\html{&nbsp;&nbsp;}}{\\mixed{\\html{$wholePartA}}{frac{\\str{$numeratorA}}{\\str{$denominatorA}}}}{\\html{ $label3 per $label4}}}'
						+'{\\row{\\but{B}{$buttonValueB}}'
						+'{\\html{&nbsp;&nbsp;}}{\\mixed{\\html{$wholePartB}}{frac{\\str{$numeratorB}}{\\str{$denominatorB}}}}{\\html{ $label3 per $label4}}}'
						+'{\\row{\\but{C}{$buttonValueC}}'
						+'{\\html{&nbsp;&nbsp;}}{\\mixed{\\html{$wholePartC}}{frac{\\str{$numeratorC}}{\\str{$denominatorC}}}}{\\html{ $label3 per $label4}}}'
						+'{\\row{\\but{D}{$buttonValueD}}'
						+'{\\html{&nbsp;&nbsp;}}{\\mixed{\\html{$wholePartD}}{frac{\\str{$numeratorD}}{\\str{$denominatorD}}}}{\\html{ $label3 per $label4}}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\html{&nbsp;}}'
							+'{\\str{The stated ratio is:}}'	
							+'{\\html{&nbsp;}}'
							+'{\\frac{\\grp{\\mixed{\\html{$startWholePart}}{frac{\\str{$startNumerator}}{\\str{$startDenominator}}}}{\\html{$label1}}}{\\grp{\\str{$quantityLabel2}}{\\html{$label2}}}}'	
							+'{\\html{&nbsp;}}'
							+'{\\row{\\mixed{\\html{$startWholePart}}{frac{\\str{$startNumerator}}{\\str{$startDenominator}}}}{\\sign{&divide;}}{\\str{$quantityLabel2}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\mixed{\\html{$answerWholePart}}{frac{\\str{$answerNumerator}}{\\str{$answerDenominator}}}}}'
							+'{\\html{&nbsp;}}'
							+'{\\row{\\css{\\str{Answer: \xA0 }}{help-answer-text}}'
							+'{\\row{\\css{\\grp{\\str{ ($buttonLetter) \xA0 }}'
							+'{\\mixed{\\html{$answerWholePart}}{frac{\\str{$answerNumerator}}{\\str{$answerDenominator}}}}{\\html{$label3 per $label4}}}{help-answer-text-tight}}'
							+'{\\row{\\html{&nbsp;}}}'
						}
					}]
                }]
            }
        },
        data = [
			{ instructions: 'Detemine the unit proportion for the following ratio:',  quantityLabel1: '175', label1: 'students', quantityLabel2: '7', label2: 'teachers', label3: 'students',  label4: 'teacher', buttonValueA: 'T', buttonLabelA: '25', buttonValueB: 'F', buttonLabelB: '35', buttonValueC: 'F', buttonLabelC: '14', buttonValueD: 'F', buttonLabelD: '33', buttonLetter: 'A', answer: '25', rounded: '', template: 'main' },
			{ instructions: 'Detemine the unit proportion for the following ratio:',  quantityLabel1: '88', label1: 'cows', quantityLabel2: '11', label2: 'acres', label3: 'cows',  label4: 'acre', buttonValueA: 'F', buttonLabelA: '9', buttonValueB: 'F', buttonLabelB: '7', buttonValueC: 'T', buttonLabelC: '8', buttonValueD: 'F', buttonLabelD: '4', buttonLetter: 'C', answer: '8', rounded: '', template: 'main' },
			{ instructions: 'Detemine the unit price for the following ratio:',  quantityLabel1: '$30', label1: '\xA0', quantityLabel2: '4', label2: 'pounds', label3: '\xA0',  label4: 'pound', buttonValueA: 'T', buttonLabelA: '$7.50', buttonValueB: 'F', buttonLabelB: '$7.00', buttonValueC: 'F', buttonLabelC: '$0.75', buttonValueD: 'F', buttonLabelD: '$6.50', buttonLetter: 'A', answer: '$7.50', rounded: '', template: 'main' },
			{ instructions: 'Detemine the unit price for the following ratio:',  quantityLabel1: '$70', label1: '\xA0', quantityLabel2: '14', label2: 'tickets', label3: '\xA0',  label4: 'ticket', buttonValueA: 'F', buttonLabelA: '$8.00', buttonValueB: 'F', buttonLabelB: '$6.00', buttonValueC: 'F', buttonLabelC: '$7.00', buttonValueD: 'T', buttonLabelD: '$5.00', buttonLetter: 'D', answer: '$5.00', rounded: '', template: 'main' },
			{ instructions: 'Detemine the unit price for the following ratio:',  quantityLabel1: '42', label1: '&cent;', quantityLabel2: '6', label2: 'feet', label3: '&cent;',  label4: 'foot', buttonValueA: 'F', buttonLabelA: '6', buttonValueB: 'T', buttonLabelB: '7', buttonValueC: 'F', buttonLabelC: '8', buttonValueD: 'F', buttonLabelD: '9', buttonLetter: 'C', answer: '7', rounded: '', template: 'main' },
			{ instructions: 'Detemine the unit price for the following ratio:',  quantityLabel1: '$1.92', label1: '', quantityLabel2: '8', label2: 'feet', label3: '&cent;',  label4: 'foot', buttonValueA: 'F', buttonLabelA: '30', buttonValueB: 'T', buttonLabelB: '24', buttonValueC: 'F', buttonLabelC: '21', buttonValueD: 'F', buttonLabelD: '18', buttonLetter: 'B', answer: '8', rounded: '', template: 'main' },
			{ instructions: 'Detemine the unit price for the following ratio:',  quantityLabel1: '$12.60', label1: '', quantityLabel2: '5', label2: 'photos', label3: '',  label4: 'photo', buttonValueA: 'F', buttonLabelA: '$3.20', buttonValueB: 'F', buttonLabelB: '$2.42', buttonValueC: 'F', buttonLabelC: '$2.30', buttonValueD: 'T', buttonLabelD: '$2.52', buttonLetter: 'D', answer: '$2.52', rounded: '', template: 'main' },
			{ instructions: 'Detemine the unit price for the following ratio (round to the nearest cent):',  quantityLabel1: '$4.85', label1: '', quantityLabel2: '3', label2: 'pounds', label3: '',  label4: 'pound', buttonValueA: 'T', buttonLabelA: '$1.62', buttonValueB: 'F', buttonLabelB: '$1.42', buttonValueC: 'F', buttonLabelC: '$1.30', buttonValueD: 'F', buttonLabelD: '$1.52', buttonLetter: 'A', answer: '$1.62', rounded: '\xA0 (rounded)', template: 'main' },
			{ instructions: 'Detemine the unit proportion for the following ratio:', startWholePart: '14', startNumerator: '1', startDenominator: '2', label1: 'hours', comparison: 'every', quantityLabel2: '3', label2: 'days', label3: 'hours', label4: 'day', buttonValueA: 'F', wholePartA: '3', numeratorA: '1', denominatorA: '3', buttonValueB: 'F', wholePartB: '4', numeratorB: '2', denominatorB: '3', buttonValueC: 'T', wholePartC: '4', numeratorC: '5', denominatorC: '6', buttonValueD: 'F', wholePartD: '2', numeratorD: '3', denominatorD: '6', buttonLetter: 'C',  answerWholePart: '4', answerNumerator: '5', answerDenominator: '6', template: 'fractional' },
			{ instructions: 'Detemine the unit proportion for the following ratio:', startWholePart: '5', startNumerator: '3', startDenominator: '4', label1: 'cups of sugar', comparison: 'for', quantityLabel2: '6', label2: 'recipes', label3: 'cups of sugar', label4: 'recipe', buttonValueA: 'F', wholePartA: '1', numeratorA: '1', denominatorA: '5', buttonValueB: 'T', wholePartB: '', numeratorB: '23', denominatorB: '24', buttonValueC: 'F', wholePartC: '1', numeratorC: '1', denominatorC: '48', buttonValueD: 'F', wholePartD: '', numeratorD: '13', denominatorD: '24', buttonLetter: 'B',  answerWholePart: '', answerNumerator: '23', answerDenominator: '24', template: 'fractional' }
        ];
		
    return dataUtils.build(desc, template, data);
	
}]);