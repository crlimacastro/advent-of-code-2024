const input = await Deno.readTextFile("1.input.txt");
const lines = input.split("\r\n");
const idPairs = lines.map((line) => line.split("   "));
const [leftIDs, rightIDs] = idPairs.reduce(
    ([leftArr, rightArr], [leftID, rightID]) => {
        leftArr.push(leftID);
        rightArr.push(rightID);
        return [leftArr, rightArr];
    },
    [[], []] as string[][],
);
let similarityScore = 0;
leftIDs.forEach((leftID) => {
    let appearances = 0;
    rightIDs.forEach((rightIDs) => {
        if (leftID === rightIDs) {
            appearances++;
        }
    });
    similarityScore += (+leftID) * appearances;
});
console.log(similarityScore);

