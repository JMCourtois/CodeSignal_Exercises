// Solution 01
const solution03 = (inputString: string): boolean => {
    return inputString == inputString.split('').reverse().join('') ? true : false;
}


// Refactor 01
const isPalindrome = (word: string) => word == word.split('').reverse().join('');

/**
 * In this case I have done a refactor with the aim of improving readability and minimizing redundancy
 * But I haven't really changed the syntax
 */