const input = await Deno.readTextFile("4.input.txt");
const lines = input.split("\r\n");
const width = lines[0].length;
const height = lines.length;

const searchStr = "MAS";
const searchStrReverse = searchStr.split("").reverse().join("");

let findCount = 0;

for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
        const c = lines[i][j];
        if (c === searchStr[1]) {
            let searchCriss = "";
            let searchCross = "";
            for (
                let k = -1;
                k <= 1;
                k++
            ) {
                const line = lines[i + k];
                if (line) {
                    const crissC = line[j + k];
                    if (crissC) {
                        searchCriss += crissC;
                    }
                    const crossC = line[j - k];
                    if (crossC) {
                        searchCross += crossC;
                    }
                }
            }
            const crissFound = searchCriss === searchStr ||
                searchCriss === searchStrReverse;
            const crossFound = searchCross === searchStr ||
                searchCross === searchStrReverse;
            if (crissFound && crossFound) {
                findCount++;
            }
        }
    }
}
console.log(findCount);
