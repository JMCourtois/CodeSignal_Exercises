// Solution 01
function statuesToConsecutive(statues: number[]): number {
    let smallestSize = Math.min(...statues);
    let biggestSize  = Math.max(...statues);

    let targetStatuesAmount = biggestSize - smallestSize + 1;

    return targetStatuesAmount - statues.length;
}

//Refactor 01 
/**
 * I don't really like this refactor that much. It does exactly the same, it just use fewer code lines. 
 * I think it makes it harder to understand, but it's nice to practice
 */
const refactor01 = (statues: number[]) => Math.max(... statues)-Math.min(... statues)+1-statues.length;

