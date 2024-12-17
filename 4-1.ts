const input = await Deno.readTextFile("4.input.txt");
const lines = input.split("\r\n");
const width = lines[0].length;
const height = lines.length;

const searchStr = "XMAS";

let findCount = 0;

for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
        const c = lines[i][j];
        if (c === searchStr[0]) {
            let searchLeft = c;
            let searchRight = c;
            let searchUp = c;
            let searchDown = c;
            let searchUpLeft = c;
            let searchDownRight = c;
            let searchDownLeft = c;
            let searchUpRight = c;
            for (
                let k = 1;
                k < searchStr.length;
                k++
            ) {
                if (j - k >= 0) {
                    searchLeft += lines[i][j - k];
                }
                if (j + k < width) {
                    searchRight += lines[i][j + k];
                }
                if (i - k >= 0) {
                    searchUp += lines[i - k][j];
                }
                if (i + k < height) {
                    searchDown += lines[i + k][j];
                }
                if (i - k >= 0 && j - k >= 0) {
                    searchUpLeft += lines[i - k][j - k];
                }
                if (i + k < height && j + k < width) {
                    searchDownRight += lines[i + k][j + k];
                }
                if (i + k < height && j - k >= 0) {
                    searchDownLeft += lines[i + k][j - k];
                }
                if (i - k >= 0 && j + k < width) {
                    searchUpRight += lines[i - k][j + k];
                }
            }
            if (searchLeft === searchStr) {
                findCount++;
            }
            if (searchRight === searchStr) {
                findCount++;
            }
            if (searchUp === searchStr) {
                findCount++;
            }
            if (searchDown === searchStr) {
                findCount++;
            }
            if (searchUpLeft === searchStr) {
                findCount++;
            }
            if (searchDownRight === searchStr) {
                findCount++;
            }
            if (searchDownLeft === searchStr) {
                findCount++;
            }
            if (searchUpRight === searchStr) {
                findCount++;
            }
        }
    }
}
console.log(findCount);
