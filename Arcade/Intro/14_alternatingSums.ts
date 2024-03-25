// Solution 01
function solution(a: number[]): number[] {
    let firstTeamTotal = 0;
    let secondTeamTotal = 0; 

    for (let i = 0; i < a.length; i++) {
        i % 2 == 0 ? firstTeamTotal += a[i] : secondTeamTotal += a[i];
    }

    return [firstTeamTotal, secondTeamTotal];
}

// In this case I didn't found a better refactor for my code :D
