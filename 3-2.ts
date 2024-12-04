const input = await Deno.readTextFile("3.input.txt");
const searchStr = "mul(";
const enableSearch = "do()";
const disableSerach = "don't()";
let enabled = true;
type Mul = {
    left: number;
    right: number;
};
const muls: Mul[] = [];

for (let i = 0; i < input.length; i++) {
    if (input.slice(i, i + enableSearch.length) === enableSearch) {
        enabled = true;
        i += enableSearch.length;
    }
    if (input.slice(i, i + disableSerach.length) === disableSerach) {
        enabled = false;
        i += disableSerach.length;
    }

    if (!enabled) continue;

    const substr = input.slice(i, i + searchStr.length);
    if (substr === searchStr) {
        let leftFactor = "";
        i += searchStr.length;
        while (isNumber(input[i]) && leftFactor.length <= 3) {
            leftFactor += input[i];
            i++;
        }
        if (input[i] !== ",") {
            i--;
            continue;
        }
        i++;
        let rightFactor = "";
        while (isNumber(input[i]) && rightFactor.length <= 3) {
            rightFactor += input[i];
            i++;
        }
        if (input[i] !== ")") {
            i--;
            continue;
        }
        muls.push({ left: +leftFactor, right: +rightFactor });
    }
}
const total = muls.reduce((prev, current) => {
    return prev + current.left * current.right;
}, 0);
console.log(total);

function isNumber(str: string) {
    return !isNaN(+str);
}
