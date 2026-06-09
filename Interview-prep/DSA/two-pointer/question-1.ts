
const bruteForce = (numbers: number[], target: number) => {
    const n = numbers.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (numbers[i] + numbers[j] === target) return [i + 1, j + 1]
        }
    }
}

const optimalSolution = (numbers: number[], target: number) => {

    let p1 = 0
    let p2 = numbers.length - 1;

    while (p1 < p2) {
        if (numbers[p1] + numbers[p2] < target) {
            p1++;
        } else if (numbers[p1] + numbers[p2] > target) {
            p2--;
        } else {
            return [p1 + 1, p2 + 1]
        }
    }

}


console.log(optimalSolution([2,7,11,15], 9));


