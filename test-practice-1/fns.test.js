import { capitalize, reverseString, calculator, caesarCipher, analyzeArray }  from './fns.js'

describe('Capitalize a string', () => {
    test('Capitalizes first letter', () => {
        expect(capitalize('total')).toBe('Total')
        expect(capitalize('find us')).toBe('Find us')
        expect(capitalize('contact')).toBe('Contact')
        expect(capitalize('a')).toBe('A')
    })
    test('Ignores the rest of the letters', () => {
        expect(capitalize('TOTAL')).toBe('TOTAL')
        expect(capitalize('tOTAL')).toBe('TOTAL')
        expect(capitalize('finD US')).toBe('FinD US')
        expect(capitalize('a')).toBe('A')
    })
    test('Ignores the symbols', () => {
        expect(capitalize('t344 ')).toBe('T344 ')
        expect(capitalize('f ab //=')).toBe('F ab //=')
        expect(capitalize('c3`13[]\]2133')).toBe('C3`13[]\]2133')
        expect(capitalize('`~`')).toBe('`~`')
    })
})

describe('Reverse a string', () => {
    test('Reverses a string with multiple characters', () => {
        expect(reverseString('total')).toBe('latot')
        expect(reverseString('FindUs')).toBe('sUdniF')
        expect(reverseString('CONTACT')).toBe('TCATNOC')
    })
    test('Reverses an empty string', () => {
        expect(reverseString('')).toBe('')
    })
    test('Reverses keywords and types', () => {
        expect(reverseString('null')).toBe('llun')
        expect(reverseString('undefined')).toBe('denifednu')
        expect(reverseString('Object')).toBe('tcejbO')
        expect(reverseString('this')).toBe('siht')
    })
    test('Reverses a string with a single character', () => {
        expect(reverseString('a')).toBe('a')
        expect(reverseString('-')).toBe('-')
        expect(reverseString('0')).toBe('0')
    })
    test('Reverses a string with spaces', () => {
        expect(reverseString(' hello world')).toBe('dlrow olleh ')
    })
})

describe('Calculator', () => {
    describe('- Adding', () => {
        test('Correctly sums two positive/negative/0 numbers', () => {
            expect(calculator.add(13, 100)).toBe(113)
            expect(calculator.add(-13, 13)).toBe(0)
            expect(calculator.add(-100, -100)).toBe(-200)
            expect(calculator.add(-2, 0)).toBe(-2)
            expect(calculator.add(0, 2)).toBe(2)
            expect(calculator.add(0, 0)).toBe(0)
        })
        test('Correctly handles the absence of 1/both of the arguments', () => {
            expect(calculator.add(0)).toBe(NaN)
            expect(calculator.add(5)).toBe(NaN)
            expect(calculator.add(-8)).toBe(NaN)
            expect(calculator.add()).toBe(NaN)
        })
    })
    describe('- Subtracting', () => {
        test('Correctly subtracts two positive/negative/0 numbers', () => {
            expect(calculator.subtract(13, 100)).toBe(-87)
            expect(calculator.subtract(-13, 13)).toBe(-26)
            expect(calculator.subtract(-100, -100)).toBe(0)
            expect(calculator.subtract(-2, 0)).toBe(-2)
            expect(calculator.subtract(0, 2)).toBe(-2)
            expect(calculator.subtract(0, 0)).toBe(0)
        })
        test('Correctly handles the absence of 1/both of the arguments', () => {
            expect(calculator.subtract(0)).toBe(NaN)
            expect(calculator.subtract(5)).toBe(NaN)
            expect(calculator.subtract(-8)).toBe(NaN)
            expect(calculator.subtract()).toBe(NaN)
        })
    })
    describe('- Multiplication', () => {
        test('Correctly multiplicate two positive/negative/0 numbers', () => {
            expect(calculator.multiply(5, 1)).toBe(5)
            expect(calculator.multiply(-10, -1)).toBe(10)
            expect(calculator.multiply(-10, 10)).toBe(-100)
        })
        test('Correctly handles division by 0/-0', () => {
            expect(calculator.multiply(0, 0)).toBe(0)
            expect(calculator.multiply(0, -0)).toBe(-0)
            expect(calculator.multiply(-0, -0)).toBe(0)
            expect(calculator.multiply(10, 0)).toBe(0)
            expect(calculator.multiply(5, -0)).toBe(-0)
        })
        test('Correctly handles the absence of 1/both of the arguments', () => {
            expect(calculator.multiply(0)).toBe(NaN)
            expect(calculator.multiply(5)).toBe(NaN)
            expect(calculator.multiply(-8)).toBe(NaN)
        })
    })
    describe('- Division', () => {
        test('Correctly divides two positive/negative/0 numbers', () => {
            expect(calculator.divide(5, 2)).toBe(2.5)
            expect(calculator.divide(100, 5)).toBe(20)
            expect(calculator.divide(13, 13)).toBe(1)
            expect(calculator.divide(-100, -100)).toBe(1)
            expect(calculator.divide(-2, 1)).toBe(-2)
            expect(calculator.divide(0, -1)).toBe(-0)
            expect(calculator.divide(0, 50)).toBe(0)
        })
        test('Correctly handles division by 0/-0', () => {
            expect(calculator.divide(2, -0)).toBe(-Infinity)
            expect(calculator.divide(-5, 0)).toBe(-Infinity)
            expect(calculator.divide(1, 0)).toBe(Infinity)
            expect(calculator.divide(0, 0)).toBe(NaN)
            expect(calculator.divide(0, -0)).toBe(NaN)
        })
        test('Correctly handles the absence of 1/both of the arguments', () => {
            expect(calculator.divide(0)).toBe(NaN)
            expect(calculator.divide(5)).toBe(NaN)
            expect(calculator.divide(-8)).toBe(NaN)
            expect(calculator.divide()).toBe(NaN)
        })
    })

})

describe('caesarCipher', () => {
    test('Correctly works with numbers less than 26', () => {
        expect(caesarCipher('defend the east wall of the castle', 1)).toBe('efgfoe uif fbtu xbmm pg uif dbtumf')
        expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 25)).toBe('zabcdefghijklmnopqrstuvwxy')
        expect(caesarCipher('hello world', 3)).toBe('khoor zruog')
    })
    test('Correctly works with numbers equals or bigger than 26', () => {
        expect(caesarCipher('defend the east wall of the castle', 26)).toBe('defend the east wall of the castle')
        expect(caesarCipher('defend the east wall of the castle', 27)).toBe('efgfoe uif fbtu xbmm pg uif dbtumf')
        expect(caesarCipher('hello world', 36)).toBe('rovvy gybvn')
    })
    test('Retains the letter case', () => {
        expect(caesarCipher('defend the EAST wall OF THE castle', 3)).toBe('ghihqg wkh HDVW zdoo RI WKH fdvwoh')
        expect(caesarCipher('Defend the east wall of the castle', 1)).toBe('Efgfoe uif fbtu xbmm pg uif dbtumf')
        expect(caesarCipher('DEFEND the EAST wall of the castlE', 20)).toBe('XYZYHX nby YUMN quff iz nby wumnfY')
    })
    test('Ignores all non-letter characters', () => {
        expect(caesarCipher('Hello world!%$#$', 1)).toBe('Ifmmp xpsme!%$#$')
        expect(caesarCipher('   Heya ', 1)).toBe('   Ifzb ')
        expect(caesarCipher('', 0)).toBe('')
    })
    test('Returns false on invalid inputs, absence of one of the arguments', () => {
        expect(caesarCipher('Hello', -4)).toBe(undefined)
        expect(caesarCipher('Hello')).toBe(undefined)
        expect(caesarCipher(2)).toBe(undefined)
    })
})

describe('analyzeArray', () => {
    test('Returns undefined if the array is not an array of integers', () => {
        expect(analyzeArray([1,8,3,4,2,6,'foo'])).toBe(undefined)
        expect(analyzeArray([1, 5, 6, () => {}, {}])).toBe(undefined)
        expect(analyzeArray([1, 5, 6, {}])).toBe(undefined)
    })
    test('Correctly calculates an average', () => {
        expect(analyzeArray([1,8,3,4,2,6]).average).toBe(4)
        expect(analyzeArray([4, 6]).average).toBe(5)
        expect(analyzeArray([2, 9, 1, 7]).average).toBe(4.75)
        expect(analyzeArray([0]).average).toBe(0)
        expect(analyzeArray([]).average).toBe(null)
    })
    test('Correctly calculates min', () => {
        expect(analyzeArray([1,8,3,4,2,6]).min).toBe(1)
        expect(analyzeArray([7, -2]).min).toBe(-2)
        expect(analyzeArray([-6, 1, 9, 4]).min).toBe(-6)
        expect(analyzeArray([0]).min).toBe(0)
        expect(analyzeArray([]).min).toBe(null)
    })
    test('Correctly calculates max', () => {
        expect(analyzeArray([1,8,3,4,2,6]).max).toBe(8)
        expect(analyzeArray([5, 0, 3, 8]).max).toBe(8)
        expect(analyzeArray([9, 2]).max).toBe(9)
        expect(analyzeArray([0]).max).toBe(0)
        expect(analyzeArray([]).max).toBe(null)
    })
    test('Correctly calculates length', () => {
        expect(analyzeArray([1,8,3,4,2,6]).length).toBe(6)
        expect(analyzeArray([1, 6, 4]).length).toBe(3)
        expect(analyzeArray([3, 5]).length).toBe(2)
        expect(analyzeArray([0]).length).toBe(1)
    })
})
