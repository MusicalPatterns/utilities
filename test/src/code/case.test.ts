import { camelCaseToConstantCase, camelCaseToLowerCase, constantCaseToUpperCase } from '../../../src/indexForTest'

describe('case', () => {
    it('camel case to constant case', () => {
        expect(camelCaseToConstantCase('whatsUpDoc'))
            .toBe('WHATS_UP_DOC')
    })

    it('camel case to lower case', () => {
        expect(camelCaseToLowerCase('whatsUpDoc'))
            .toBe('whats up doc')
    })

    it('constant case to upper case', () => {
        expect(constantCaseToUpperCase('WHATS_UP_DOC'))
            .toBe('Whats Up Doc')
    })
})
