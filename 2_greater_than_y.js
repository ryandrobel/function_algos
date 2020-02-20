// Given an array and a number y, count and return how many numbers in the array are bigger than y.
// Predcted output: greaterThanY([1,6,8,3,5,2], 4) should return 3

function greaterThanY(arr, y) {
    count = 0
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            count++
        }
    }
    return count
}
var result = greaterThanY([1, 6, 8, 3, 5, 2], 4)
console.log(result)


