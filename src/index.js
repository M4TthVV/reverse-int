module.exports = function reverse (n) {
    const num = n.toString()
    let result = ''

    for (let i = 1; i <= num.length; i++) {
        result += num[num.length - i]
    }

    return result.replace('-', '')
}
