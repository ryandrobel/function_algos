//Given an array, write a function that changes all positive numbers in the array to the string "big". 
//Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

function biggieSize(banana) {
    for (var i = 0; i < banana.length; i++) {
        if (banana[i] > 0) {
            banana[i] = "big"
        }
    }
    console.log(banana)
    return banana
}

biggieSize([-2, 3, 5, -9, 0])
