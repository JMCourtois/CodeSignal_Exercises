// Solution 01
function getCommonCharCount(s1: string, s2: string): number {
    let smallList: string[];
    let bigList: string[];
    let commonCharCount = 0;

    if (s1.length <= s2.length) {
        smallList = s1.split('');
        bigList = s2.split('');
    } else {
        smallList = s2.split('');
        bigList = s1.split('');
    }

    for (let i = 0; i < smallList.length; i++) {
        let foundIndex = bigList.indexOf(smallList[i]);
        if ( foundIndex != -1) {
            bigList.splice(foundIndex, 1);
            commonCharCount++;
        }
    }

    return commonCharCount;
}


// Refactor 01
/**
 * The above code is more efficient since it only loops through the smallest array. For 15 items it's not a big difference. But for 2,000,000 it matters.
 * Anyways this code is slightly simpler. 
 */

function getCommonCharCount_r1(s1: string, s2: string): number {
    let commonCharCount = 0;

    for (let element of s1) {
        if (s2.includes(element)) {
            commonCharCount++;
            s2 = s2.replace(element, '');
        }
    }

    return commonCharCount;
}
