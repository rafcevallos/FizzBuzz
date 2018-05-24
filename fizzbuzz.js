// FIZZ BUzZ
// create an array of 1-30
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 , 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

// iterate over array
const fizzybizzy = numbers.forEach(n => {
    // find any # divisible by 3 & 5
    if (n % 3 === 0 && n % 5 === 0) {
        // log fizzbuzz
        numbers[n-1] = "fizzbuzz"
    } else if
    // find any # divisible by 5
        (n % 5 === 0) {
            // log buzz
            numbers[n-1] = "buzz"
        } else if
        // find any # divisible by 3
        (n % 3 === 0) {
            // log fizz
            numbers[n-1] = "fizz"
}
})

// console.log the array which will show fizz, buzz, and fizzbuzz
console.log(numbers)