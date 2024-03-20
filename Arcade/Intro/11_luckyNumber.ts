// Solution 01
function isLucky(n: number): boolean {
    let isTicket = n.toString().length % 2  == 0 ? true : false; 
    
    if (isTicket) {
        let numbers = String(n).split('');
        let firstHalfSum = 0;
        let secondHalfSum = 0;
        
        for (let i = 1; i <= numbers.length / 2; i++) {
            firstHalfSum += parseInt(numbers[i-1]);
            secondHalfSum += parseInt(numbers[numbers.length - i]);
        }
        
        if (firstHalfSum == secondHalfSum) return true;
        return false; 
    }
    
    return false;
}


// Refactor 01 
/**
 * I really liked this refactor, because of the idea of using 0 as the value to determine if it' lucky
 * Actually the code is much shorter, but because I didn't take into consideration that the given number "n" is always Ticket (even)
 */
function isLucky_r1(n: number): boolean {
    var count = 0;
    let integers = String(n).split('').map(el => parseInt(el));

    integers.forEach( (el, i) => { 
        (i < integers.length / 2) ? count += el : count -= el;
    });

    return count == 0;
}
