document.addEventListener('DOMContentLoaded', function () {
    //generate romanMatrix array with roman numbers and their integer values
    var romanMatrix = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ];
    console.log(convertToRoman(1200));
    console.log(convertToRoman(100));
    console.log(convertToRoman(12));

    function convertToRoman(num) {
        if (num === 0) {
            return '';
        }
        for (var i = 0; i < romanMatrix.length; i++) {
            if (num >= romanMatrix[i][0]) {
                return romanMatrix[i][1] + convertToRoman(num - romanMatrix[i][0]);
            }
        }
    }

    function convertToInt(romanNumber) {
        let currentValue = 0;
        let result = 0;
        const string = romanNumber.split('');
        const romanNumbers = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000,
        };
        let firstNum = romanNumbers[string[0].toUpperCase()];
        for (let char of string) {
            currentValue = romanNumbers[char.toUpperCase()];
            if (currentValue <= firstNum) {
                result += currentValue;
            } else {
                result = currentValue - result;
            }
        }
        return result;
    }

    console.log(convertToInt('VI'));
    console.log(convertToInt('XI'));
    console.log(convertToInt('XII'));
});
