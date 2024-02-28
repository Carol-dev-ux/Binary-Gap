// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // Implement your solution here
    
    const binaryString = N.toString(2);
    let maxGap = 0;
    let currentGap = 0;
    
    for (const digit of binaryString) {
        if (digit === '1') {
            maxGap = Math.max(maxGap, currentGap);
            currentGap = 0;
        } else {
            currentGap++;
        }
    }
    
    return maxGap;
}
