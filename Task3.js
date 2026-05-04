function getGrade(score) {
    if (score >= 90) {
        return "A";
    }
    if (score >= 80) {
        return "B";
    }
    if (score >= 70) {
        return "C";
    }
    if (score >= 60) {
        return "D";
    }
    return "F";
}

function main() {
    const score = 85;
    const grade = getGrade(score);
    console.log(`Grade: ${grade}`);
}

main();
