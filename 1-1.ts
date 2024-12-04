const input = await Deno.readTextFile("1.input.txt");
const lines = input.split("\r\n");
const idPairs = lines.map((line) => {
    const [leftStr, rightStr] = line.split('   ');
    const [leftNum, rightNum] = [+leftStr, +rightStr];
    return [leftNum, rightNum];
});
const [leftIDs, rightIDs] = idPairs.reduce(
    ([leftArr, rightArr], [leftID, rightID]) => {
        leftArr.push(leftID);
        rightArr.push(rightID);
        return [leftArr, rightArr];
    },
    [[], []] as number[][],
);
const [leftIDsSorted, rightIDsSorted] = [
    leftIDs.sort((a, b) => a - b),
    rightIDs.sort((a, b) => a - b),
];
const sumOfDifferences = leftIDsSorted.reduce((prev, _, i) => {
    const leftID = leftIDsSorted[i];
    const rightID = rightIDsSorted[i];
    const difference = Math.abs(leftID - rightID);
    return prev + difference;
}, 0);
console.log(sumOfDifferences);
