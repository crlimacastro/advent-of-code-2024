const input = await Deno.readTextFile("2.input.txt");
const lines = input.split("\r\n");
const reports = lines.map((line) => line.split(" ").map((level) => +level));

const safeReportCount = reports.reduce((prev, report) => {
    return prev + +isReportSafeDampened(report);
}, 0);
console.log(safeReportCount);

function isReportSafe(report: number[]) {
    let prevLevel = report[0];
    const isIncreasing = report[1] > report[0];
    for (let i = 1; i < report.length; i++) {
        const level = report[i];
        if (prevLevel === level) {
            return false;
        }
        if (isIncreasing && level < prevLevel) {
            return false;
        }
        if (!isIncreasing && level > prevLevel) {
            return false;
        }
        const difference = Math.abs(level - prevLevel);
        if (difference > 3) {
            return false;
        }
        prevLevel = level;
    }

    return true;
}

function isReportSafeDampened(report: number[]) {
    const reportPermutations = [report];
    for (let i = 0; i < report.length; i++) {
        reportPermutations.push(report.toSpliced(i, 1));
    }
    return reportPermutations.some((permutation) => isReportSafe(permutation));
}
