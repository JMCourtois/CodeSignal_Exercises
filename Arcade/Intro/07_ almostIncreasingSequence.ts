// Solution 01
/**
 * Here I tried to base the method by comparison and sets, but it had troubles with things like: 
 * [40, 50, 60, 10, 20, 30]
 * or
 * [1, 2, 3, 4, 3, 6]
 */
function solution0701(sequence: number[]): boolean {
    let substractions = 0;
    let seenNumbers = new Set<number>();
    
    for (let i = 0; i < sequence.length - 1; i++) {
        if (sequence[i] >= sequence[i+1] || seenNumbers.has(sequence[i])) {
            substractions++;
        }
        seenNumbers.add(sequence[i]);
    }
    
    return substractions > 1 ? false : true; 
}

// Solution 02
function solution0702(sequence: number[]): boolean {
    let substractions = 0;

    for (let i = 0; i < sequence.length - 1; i++) {
        if (sequence[i] >= sequence[i+1]) {
            if (sequence[i] >= sequence[i+2] && sequence[i+2] !== undefined) {
                return false;
            }
            substractions++;
        }
    }

    return substractions > 1 ? false : true;
}

// Solution 03
function solution0703(sequence: number[]): boolean {
    let substractions = 0;
    let newArray = sequence;

    for (let i = 0; i < sequence.length - 1; i++) {
        if (sequence[i] >= sequence[i+1]) {
            newArray.splice(i, 1);
            substractions++;
            if (substractions > 1) {
                return false;
            }
        }
    }
    for (let i = 0; i < newArray.length - 1; i++) {
        if (sequence[i] >= sequence[i+1]) {
            return false;
        }
    }

    return substractions > 1 ? false : true;
}

// Solution 04
/**
 * This time I am going to take the approach of compare 3 instead
 */
function solution0704(sequence: number[]): boolean {
    let newArray = sequence;

    for (let i = 0; i < sequence.length - 1; i++) {
        if (sequence[i] >= sequence[i+1]) {
            if (sequence[i+1] > sequence[i-1] && sequence[i+1] !== undefined) {
                newArray.slice(i+1, 1);
                break;
            }
            newArray.slice(i, 1);
            break;
        }
    }

    for (let i = 0; i < newArray.length - 1; i++) {
        if (newArray[i] >= newArray[i+1]) {
            return false;
        }
    }
    return true;
}

// Solution 05 
/**
 * Now let's try with the inverse structure
 */
function solution0705(sequence: number[]): boolean {
    let newArray = sequence;
    
    for (let i = 0; i < sequence.length - 2; i++) {
        if (sequence[i] >= sequence[i+1] && sequence[i] >= sequence[i+2]) {
            newArray.slice(sequence[i], 1);
            break;
        }
        if (sequence[i] >= sequence[i+1] && sequence[i] < sequence[i+2]) {
            newArray.slice(sequence[i+1], 1);
            break;
        }
        if (sequence[i] < sequence[i+1] && sequence[i] >= sequence[i+2]) {
            newArray.slice(sequence[i+2], 1);
            break;
        }
    }

    for (let i = 0; i < newArray.length - 1; i++) {
        if (sequence[i] >= sequence[i+1]) {
            return false;
        }
    }
    return true;
}

// Solution 06 
/**
 * I don't really like the code, but is the best I found
 */
function almostIncreasingSequence(sequence: number[]): boolean {
    let newArray = sequence;
    
    if (sequence.length < 3) {
        return true;
    }
    
    for (let i = 0; i < sequence.length - 2; i++) {
        if (sequence[i] >= sequence[i+1] && sequence[i] >= sequence[i+2]) {
            newArray.splice(i, 1);
            break;
        }
        if (sequence[i] >= sequence[i+1] && sequence[i] < sequence[i+2]) {
            newArray.splice(i+1, 1);
            break;
        }
        if (sequence[i] < sequence[i+1] && sequence[i] >= sequence[i+2]) {
            newArray.splice(i+2, 1);
            break;
        }          
        if (sequence[i+2] < sequence[i+1] && sequence[i] < sequence[i+1]) {
            newArray.splice(i+1, 1);
            break;
        }          
    }

    for (let i = 0; i < newArray.length - 1; i++) {
        if (newArray[i] >= newArray[i+1]) {
            return false;
        }
    }
    return true;
}


// Refactor 01
/**
 * This was actually incredible, because it was a solution made by GPT4
 * But it was better than all the solutions made by the rest of the users I saw
 * It sees a section of A < B < C and checks if the problem is in B or C
 */
function almostIncreasingSequence_r1(sequence: number[]): boolean {
    let removalCount = 0;

    for (let i = 1; i < sequence.length && removalCount <= 1; i++) {
        if (sequence[i - 1] >= sequence[i]) {
            removalCount++;
            
            // Determine if the problem is [i] or [i-1] and adjust to ignore that value
            if (sequence[i - 2] >= sequence[i]) {
                sequence[i] = sequence[i - 1]; 
            }
        }
    }

    return removalCount <= 1;
}

