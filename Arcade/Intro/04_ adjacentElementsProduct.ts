// Solution 01
/**
 * Today I was super tired, so I just tried to solve the problem as fast as possible. Anyways I achieved
 * to get to the solution with the first attempt. 
 */
function solution04(inputArray: number[]): number {
    let product = inputArray[0]*inputArray[1];
    
    for (let i = 1; i < inputArray.length; i++) {
        let currentProduct = inputArray[i] * inputArray[i+1];
        if (product < currentProduct) {
            product = currentProduct
        }
    }

    return product; 
}


// Refactor 01
/**
 * This is the one I like the most. It's not super fancy, but is the easiest to read. 
 */
function maxAdjacentProduct (values: number[]): number {
    let maxProduct = Number.MAX_SAFE_INTEGER;

    for (let i = 1; i < values.length; i++) {
        let currentProduct = values[i] * values[i+1];
        if (maxProduct < currentProduct) {
            maxProduct = currentProduct;
        }
    }

    return maxProduct;
}


// Refactor 02
/**
 * This one is more complex to understand, but once you get it is pretty short.
 * 
 * This create a new array with .slice() that starts from the element inputArray[1]. It has one e lesser. 
 * 
 * Then it uses .map() to transfor this new array element by element with the product of each element of
 * the sliced array with its predecesor in the inputArray. (x = sliceElement, i = counter inside .map())
 * 
 * Then you will have a new array of all the products, then you just apply Math.max() to get the max value
 * But for that you need to spread the new array inside the Math.max() with "...".
 * 
 */
function maxAdjacentProduct_r2(inputArray: number[]): number {
    return Math.max(...inputArray.slice(1).map((x, i) => x = x * inputArray[i]));
}

/**
 * Actually I like more the 1st refactor, it's easier to read. And that is really important for teams. 
 */