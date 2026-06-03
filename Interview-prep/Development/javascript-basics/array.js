//! Filter method

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);
// Output: [2, 4, 6]


//! Map method
const doubled = numbers.map((num) => {
    return num * 2;
});

console.log(doubled);

//! Reduce method
console.log(
    numbers.reduce((acc, val) => {
        return acc + val;
    }, 0)
)