// ! given an array of numbers count the elements of an array which consisting of odd  digits

let arr = [5, 100, 200, 33333, 4005003, 12, 44, 66]
function countDigits(n) {
    let count = 0;
    do {
        count++;
        n = Math.floor(n / 10)
    } while (n > 0)
    return count;
}
function oddDigitCount(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        let count = countDigits(arr[i]);
        if (count % 2 != 0) {
            res++;
        }
    }
    return res;
}
console.log(oddDigitCount(arr))