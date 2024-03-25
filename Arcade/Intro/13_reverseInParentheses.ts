// Solution 03
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