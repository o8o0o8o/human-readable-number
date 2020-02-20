module.exports = function toReadable(number) {
    let result = "";
    let str = String(number).replace(/\B/g, " ");
    let one = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",        
    };        
    let two = {        
        2: "twenty",
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    };  
    let foo = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    }
        result = one[+str.charAt(str.length - 1)];

        if ((str.length - 3) === 2 || str.length === 3) {              
            if (+str.charAt(str.length - 3) === 1) {
                result = foo[+str.substr(str.length - 3, 3).replace(' ', '')];  
            } else if (+str.charAt(str.length - 1) === 0 && +str.charAt(str.length - 3) === 0) {
                result = '';
            } else if (+str.charAt(str.length - 3) === 0) {
                //no zeros no heroes
            }
            else if (+str.charAt(str.length - 1) === 0) {                
                    result = two[+str.charAt(str.length - 3)];                              
            }             
            else {                
                result = two[+str.charAt(str.length - 3)] + ' ' + result;
            }                       
        }

        if ((str.length - 5) === 0) {
            if (result === '') {
                result = " hundred" + result;
            } else {
                result = " hundred " + result;
            }            
            result = one[+str.charAt(0)] + result;
        }  
    
    return result;
};
