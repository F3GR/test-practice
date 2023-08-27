export function capitalize(str) {
    return `${str[0].toUpperCase()}${str.slice(1)}`
}

export function reverseString(str) {
    return `${str.split('').reverse().join('')}`
}

export const calculator = {
    add: (a, b) => a + b, 
    subtract: (a, b) => a - b, 
    divide: (a, b) => a / b, 
    multiply: (a, b) => a * b
}

export function caesarCipher(str, n) {
    if (typeof str !== 'string' || typeof n !== 'number' || n < 0) {
        return undefined
    }

    let result = ''
    for (let i = 0; i < str.length; i++) {
        if (!isLetter(str[i])) {
            result += str[i]
            continue
        }
        const code = str.charCodeAt(i)
        if (code <= 90) {
           result += String.fromCharCode(((code - 65 + n) % 26) + 65)
        } else if (code >= 97) {
           result += String.fromCharCode(((code - 97 + n) % 26) + 97)
        }
    }
    return result
}
function isLetter(char) {
    const code = char.charCodeAt(0)
    return (code >= 65 && code <= 90) || (code >= 97 && code <= 122)
}

export function analyzeArray(arr) {
    const obj = {
        average: null,
        min: null,
        max: null,
        length: null
    }

    let min = arr[0]
    let max = arr[0]
    let sum = 0
    const n = arr.length
    for (let i = 0; i < n; i++) {
        const current = arr[i]
        if (typeof current !== 'number') {
            return undefined
        }
        if (current < min) {
            min = current
        }
        if (current > max) {
            max = current
        }
        sum += current
    }

    if (n) obj.average = sum / n
    if (min !== undefined) obj.min = min
    if (max !== undefined) obj.max = max
    obj.length = n
    return obj
}