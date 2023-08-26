const { capitalize, reverseString } = require('./fns')

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
    test('Reverses a string with multiple characters', () => {
        expect(reverseString('total')).toBe('latot')
        expect(reverseString('FindUs')).toBe('sUdniF')
        expect(reverseString('CONTACT')).toBe('TCATNOC')
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