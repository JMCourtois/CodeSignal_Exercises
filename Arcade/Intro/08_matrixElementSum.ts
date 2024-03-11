// Solution 01
/**
 * This one was way easier than expected, actually I solved it in 5 minutes
 */
function noGhostSum(matrix: number[][]): number {
    let ghostInColumn = Array(matrix[0].length).fill('noGhost');
    let totalRoomsCost = 0;
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (ghostInColumn[j] === 'noGhost') {
                matrix[i][j] != 0 ? totalRoomsCost += matrix[i][j] : ghostInColumn[j] = 'ghost!';
            }
        }
    }

    return totalRoomsCost;
}
