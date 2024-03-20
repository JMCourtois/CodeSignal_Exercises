// Solution 01
function sortByHeight(a: number[]): number[] {
    let peopleByHeight = a.filter(el => el != -1).sort((a, b) => a - b);

    let counter = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] != -1) {
            a[i] = peopleByHeight[counter];
            counter++;
        }
    }
    
    return a;
}


// Refactor 01
/**
 * I like this refactor for the use of the .shift() method. It removes the first element of an array and return that removed element.
 * It's nice to know that I can use this. But actually, the refactor is a slower function than the first version: using map is slower than just using indexes, and the .shif() repeatedly also makes it less efficient. 
 */
function sortByHeight_r1(a: number[]): number[] {
    let peopleByHeight = a.filter(el => el != -1).sort((a, b) => a - b);

    return a.map(el => {
        if (el != -1) {
            let shiftedValue = peopleByHeight.shift();
            if (shiftedValue) return shiftedValue;
        }
        return -1;
    });
}