import { camelCaseToConstantCase } from '../../../src/indexForTest'

describe('case', () => {
    it('camel case to constant case', () => {
        expect(camelCaseToConstantCase('whatsUpDoc'))
            .toBe('WHATS_UP_DOC')
    })
})
