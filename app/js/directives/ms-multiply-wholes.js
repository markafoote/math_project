'use strict';
	
angular.module('mathSkills') 
	.config(['parserProvider', function (parserProvider) {
		// first parameter is 'english' to display text, otherwise displays number columns
		// second parameter is 'complete' to display number column with addition result
        parserProvider.register('multiplywholes', {
            directiveTemplate: '<ms-multiply-wholes expected={{expected}}></ms-multiply-wholes>'
        });
    }])
  .directive('msMultiplyWholes', [
	'parser',
	function (parser) {
		return {
			restrict: 'E',
			scope: {
				expected: '@',
				label: '@'
			},
			controller: function ($scope, $element, $filter) {
				$scope.mathdisplay = true;
				$scope.displayresult = false;
				$scope.sign = '\xD7';

				var tagParameters = [],
					problemObjects = [],
					answerObject = 0,
				 	allNumbersArray = new Array(2),
					productArray = [],
					carryArray = [],
					userAnswer = [],
					answerArray = [],
					multiplicandDigits = 0,
					multiplierDigits = 0,
					maxAnswerDigits = 0,
					productColumn = 0,
					gotCarry = 0,
					answerString = "",
					multiplier = [],
					multiplicand = [],
					multiplicandParsed = "",
					multiplierParsed = "",
					maxNumberLength = 0;
				
				function removeLeadingZeros (zerosNumberArray) {
					for (var ii = 0, oneNotZero = 0; ii < zerosNumberArray.length; ii++) {
						if (zerosNumberArray[ii]!==0) {
							oneNotZero = 1;
						} else if (oneNotZero == 0) {
							zerosNumberArray[ii] = "";
						}
					}			
				}
				
			 // Extract the tag values
				$scope.$watch('expected', function () { 
					if ($scope.expected) {
						tagParameters = parser.extractTag($scope.expected).args;
					}
					
					if (tagParameters[0] === "english") {
						$scope.mathdisplay = false;
					}
					
					if (tagParameters[1] === "complete") {
						$scope.displayresult = true;
						$scope.mathdisplay = true;
					}
					
					if ($scope.mathdisplay) {
						
						problemObjects[0] = parseInt(tagParameters[2], 10);
						problemObjects[1] = parseInt(tagParameters[3], 10);
						//  if multiplicand < multiplier exchange the numbers
						if (problemObjects[0]<problemObjects[1]) {
							problemObjects.reverse();
						}
						
						answerObject = $filter('multiply-wholes')(problemObjects);
						answerString = answerObject.toString();
						
						// get the number of digits in the multiplicand and multiplier
						multiplicandDigits = problemObjects[0].toString().length;
						multiplierDigits = problemObjects[1].toString().length;
						
						// get the maximum number of digits
						maxAnswerDigits = answerObject.toString().length;
								
						for (var ii = 0, len = 2; ii<len; ii++) {
							allNumbersArray[ii] = new Array(maxAnswerDigits); 
						}
						
						// initialize arrays
						for (var ii = 0; ii<2; ii++) {
							for (var jj = 0; jj<maxAnswerDigits; jj++) {
								allNumbersArray[ii][jj] = 0;
								answerArray[jj] = 0;
							}
						}
						// create a two-dimensional array for ones-column multiplication results 
						for (var ii = 0; ii<multiplierDigits; ii++) {
							productArray[ii] = new Array(maxAnswerDigits);
							for (var jj = 0; jj<maxAnswerDigits; jj++) {
								productArray[ii][jj] = 0;
							}
						}
						
						// create a two-dimensional array for carry digits
						for (var ii = 0; ii<multiplierDigits; ii++) {
							carryArray[ii] = new Array(maxAnswerDigits);
							for (var jj = 0; jj<maxAnswerDigits; jj++) {
								carryArray[ii][jj] = 0;
							}
						}
						
						// create an array for the answer, one digit per column
						for (var jj = maxAnswerDigits-1, ansString = answerObject.toString(), kk = 1; jj>=0; jj--) {
								answerArray[jj] = ansString.substr(maxAnswerDigits-kk, 1);
								kk++;
						}
						
						// create an array with a row for each number, one digit per column
						for (var ii = 0; ii<2; ii++) {
							var currentNumber = problemObjects[ii],
								currentNumberString = currentNumber.toString(),
								currentNumbLength = currentNumberString.length,
								endPosArrayWrite = maxAnswerDigits-currentNumbLength;
							
							for (var jj = maxAnswerDigits-1, kk = 1; jj>=endPosArrayWrite; jj--) {
								allNumbersArray[ii][jj] = currentNumberString.substr(currentNumbLength-kk, 1);
								kk++;
							}
						}
								
						// create an array of results of multiplication of the two numbers
						for (var ii = maxAnswerDigits - 1, kk = 0; ii >= 0; ii--) {
							for (var jj = maxAnswerDigits - 1; jj >= 0; jj--) {
								productColumn = 0;
								productColumn = allNumbersArray[0][jj]*allNumbersArray[1][ii];
								/*while (productColumn > 9) {
									productColumn = productColumn - 10;
								}*/
								if (kk<multiplierDigits) {
									productArray[kk][jj-kk] = productColumn;
								}
							}
							kk++
						}
						
						// work the carries
						for (var ii = 0; ii < multiplierDigits; ii++) {
							for (var jj = maxAnswerDigits; jj > 0; jj--) {
								productColumn = 0;
								productColumn = productArray[ii][jj];
								if ((productColumn > 9)&&(jj<maxAnswerDigits)){
									productColumn = Math.floor(productColumn/10);				
									productArray[ii][jj-1] = productArray[ii][jj-1]+productColumn;
								}
							}
						}
						
						// create the carryArray with the tens part of the worked carry digits
						for (var ii = 0; ii < multiplierDigits; ii++) {
							for (var jj = maxAnswerDigits-1; jj>=0; jj--) {
								productColumn = 0;
								productColumn = productArray[ii][jj];
								if ((gotCarry == 0)&&(productColumn > 9)) {
										 gotCarry = 1;
								}
								if ((productColumn > 9)&&(jj>0)){
										productColumn = Math.floor(productColumn/10);
										carryArray[ii][jj-1] = productColumn;
								}
							}
						}
						carryArray.reverse();
						
						// rework productArray to only show the part of the product < 10
						for (var ii = 0; ii < multiplierDigits; ii++) {
							for (var jj = maxAnswerDigits; jj > 0; jj--) {
								productColumn = 0;
								productColumn = productArray[ii][jj];
								if ((productColumn > 9)&&(jj<maxAnswerDigits)){
									productColumn = productColumn - (Math.floor(productColumn/10)*10);				
									productArray[ii][jj] = productColumn;
								}
							}
						}
						
						removeLeadingZeros(allNumbersArray[0]);
						removeLeadingZeros(allNumbersArray[1]);
						
						// productArray leading zeros removal requires checking for a line representing muliplying by zero
						for (var ii = 0; ii < multiplierDigits; ii++) {
							var productArrayRowNonZero = false;
							for (var kk = 0; kk < productArray[ii].length; kk++) {
								if (productArray[ii][kk] !== 0) {
									productArrayRowNonZero = true;
								}
							}
							for (var kk = 0, oneNotZero = 0; kk < productArray[ii].length; kk++) {
								if (productArrayRowNonZero == true) {
									if (productArray[ii][kk]!==0) {
										oneNotZero = 1;
									} else if (oneNotZero == 0) {
										productArray[ii][kk] = "";
									}
								} else {
									if (kk < (maxAnswerDigits - (multiplicandDigits + ii))) {
										productArray[ii][kk] = "";
									}
								}
							}			
						}
				
						// remove zeros from carryArray
						for (var ii = 0, kk = 0; ii<multiplierDigits; ii++) {
							for (var jj = maxAnswerDigits-1; jj>=0; jj--) {
								if (carryArray[ii][jj]==0) {
									carryArray[ii][jj] = "";
								} else {
									carryArray[ii][jj] = carryArray[ii][jj].toString();
								}
							}
						}
						
						$scope.answerObject = answerObject;
						
						$scope.firstArray = [];
						$scope.secondArray = [];
						$scope.thirdArray = [];
						$scope.fourthArray = [];
						$scope.firstArray = allNumbersArray[0].slice();
						$scope.secondArray = allNumbersArray[1].slice();
						if ($scope.displayresult) {
							$scope.thirdArray = productArray.slice();
							// if productArray.length = 1, the multiplier is single digit, so just display answerArray (not productArray) 
							if (productArray.length == 1) {
								$scope.thirdArray = [];
							} 
							$scope.fourthArray = answerArray.slice();
						} else {
							$scope.thirdArray = [];
							$scope.fourthArray = [];
						}
					
					} else {
								$scope.inenglishfirst = tagParameters[2]
								$scope.inenglishsecond = tagParameters[3];
					}
					
				});
			},
			templateUrl: 'partials/directives/ms-multiplication.html'

		};
	}]);