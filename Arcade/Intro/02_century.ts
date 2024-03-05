// Solution 01
function solution02(year: number): number {
    return Math.ceil(year / 100);
}

// Refactor 01
const getCenturyOf = (year: number) => Math.ceil(year / 100);

/**
 * In this case I didn't add the type the function should
 * return, because the type inference from TS should determine
 * that the type the function should return is 'number'.
 * 
 * It's also easier to read while using the function.
 * 
 * It's also important to remember that arrow functions don't
 * work for creating constructors. So never call them with
 * 'new'.
 */