// Solution 01
function solution01(param1: number, param2: number): number {
    return param1 + param2;
}

// Refactor 01
// The arrow function syntax is clearer for this exercise. 
const sum = (x: number, y: number): number => x + y; 

/** 
 * It's important to remember that arrow functions don't have 
 * 'this' in the scope of the function, they inherit it from
 * the enclosing scope at the time they are defined. 
 * This makes arrow functions especially good for callbacks
*/