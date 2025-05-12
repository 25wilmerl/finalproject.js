let i = 0

function numbers(max) {
    i = Math.ceil(Math.random() * max)
    return i
}
console.log(numbers(100))