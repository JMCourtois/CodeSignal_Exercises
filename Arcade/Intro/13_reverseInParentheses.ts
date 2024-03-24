// Solution 01
function solution(inputString: string): string {
    let openParenthesesCount = 0; 
    let closeParenthesesCount = 0; 
    let firstParentheses = 0;
    let lastParentheses = 0;
    let selectedString = '';
    let totalString = '';

    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] == '(') {
            openParenthesesCount++;
            firstParentheses = i+1;
            totalString += inputString.substring(0)
        }
        if (inputString[i] == ')') {
            closeParenthesesCount++;
            if (openParenthesesCount == closeParenthesesCount) {
                lastParentheses = i;
                selectedString = inputString.substring(firstParentheses, lastParentheses);
            }
        }
    }
    return selectedString.split('').reverse().join('');

}


// Solution 02
function solution2(inputString: string): string {
    let charsArray = inputString.split('');

    let parenthesesCount = 0;

    let totalChars: string[] = [];
    let subCharsArray: string[] = [];
    console.log(totalChars, 'Total Chars Array');
    console.log(subCharsArray, 'Sub Chars Array');

    for (let i = 0; i < charsArray.length; i++) {
        if (charsArray[i] == '(' || charsArray[i] == ')') {
            if (charsArray[i] == ')') {
                console.log('i = ) activated')
                parenthesesCount--
                if (parenthesesCount == 0) {
                    totalChars.push(...solution2(subCharsArray.join('')).split(''));
                    subCharsArray = [];
                }
            }
            
            if (charsArray[i] == '(') {
                console.log('i = ( activated')
                parenthesesCount++
            } 
        }

        if (parenthesesCount != 0) {
            console.log('add sub char')
            subCharsArray.push(charsArray[i]);
        }

        if (parenthesesCount == 0) {
            console.log('add normal char')
            totalChars.push(charsArray[i]); 
        }
    }

    return totalChars.reverse().join('');

}

// Solution 03 - Final
function reserveParentheses(inputString: string): string {
    let charsArray = inputString.split('')

    let parenthesesCount = 0

    let totalChars: string[] = []
    let subCharsArray: string[] = []
   

    for (let i = 0; i < charsArray.length; i++) {
        if (charsArray[i] == '(' || charsArray[i] == ')') {
            if (charsArray[i] == '(') {
                if (parenthesesCount != 0) {
                    subCharsArray.unshift(')')
                }
                parenthesesCount++
                continue
            }
            if (charsArray[i] == ')') {
                parenthesesCount--
                if (parenthesesCount == 0) {
                    console.log(subCharsArray)
                    totalChars.push(...reserveParentheses(subCharsArray.join('')).split(''))
                    subCharsArray = []
                    continue
                }
                subCharsArray.unshift('(')
                continue
            }
        }
        if (parenthesesCount == 0) {
            totalChars.push(charsArray[i])
        }
        if (parenthesesCount != 0) {
            subCharsArray.unshift(charsArray[i])
        }
        
    }

    return totalChars.join('')

}

// Refactor 01 
/**
 * This one uses RegEx to select the content of parentheses and reverse it later on with the .replace()
 */

function reserveParentheses_r1(inputString: string) {
    while (inputString.includes('(')) {
        inputString = inputString.replace(/\(([^()]*)\)/, (_, str) => [...str].reverse().join(''));
    }
    return inputString;
}