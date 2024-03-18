// Solution 01
function getLongestStrings(inputArray: string[]): string[] {
    const lengthsArray: number[] = inputArray.map((element) => element.length);
    const maxLength = Math.max(...lengthsArray);

    let allLongestStrings: string[] = [];

    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length == maxLength) {
            allLongestStrings.push(inputArray[i]);
        }
    }

    return allLongestStrings;
}


// Refactor 01
/**
 * Here I use .filter() js method, that works like a .map() but it filters instead. I think is cleaner
 * than the loop. 
 */
function getLongestStrings_r1(inputArray: string[]): string[] {
    const lengthsArray: number[] = inputArray.map((element) => element.length);
    const maxLength = Math.max(...lengthsArray);

    return inputArray.filter((element) => element.length == maxLength);
}