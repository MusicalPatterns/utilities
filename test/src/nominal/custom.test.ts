// tslint:disable no-any no-unused-expression comment-format no-commented-code no-dead-store no-type-definitions-outside-types-modules

import {
    computeNominalInterface,
    CustomFrom,
    CustomOf,
    CustomTo,
    DUMMY_VALUE_FOR_COMPUTING_NOMINAL_INTERFACE,
    NominalInterface,
    Of,
    to,
    Translation,
} from '../../../src/indexForTest'

describe('custom nominals', () => {
    type Numero = Number & { _NominalBrand: 'Numero' }
    type Numeros = Number[] & { _NominalBrand: 'Numeros' }

    let customTo: CustomTo<TestNominalInterfaceOptionObject>
    let customFrom: CustomFrom<TestNominalInterfaceOptionObject>
    let customOf: CustomOf<TestNominalInterfaceOptionObject>

    interface TestNominalInterfaceOptionObject {
        number: { Numero: Numero },
        numericArray: { Numeros: Numeros }
    }

    beforeEach(() => {
        const nominalInterfaceOptionsObject: TestNominalInterfaceOptionObject = {
            number: {
                Numero: DUMMY_VALUE_FOR_COMPUTING_NOMINAL_INTERFACE as Numero,
            },
            numericArray: {
                Numeros: DUMMY_VALUE_FOR_COMPUTING_NOMINAL_INTERFACE as Numeros,
            },
        }
        const nominalInterface: NominalInterface<TestNominalInterfaceOptionObject> =
            computeNominalInterface(nominalInterfaceOptionsObject)
        customTo = nominalInterface.to
        customFrom = nominalInterface.from
        customOf = nominalInterface.of
    })

    describe('to', () => {
        it('works like a normal To, for Units', () => {
            const numero: Numero = customTo.Numero(3)
            const numeros: Numeros = customTo.Numeros([ 3 ])

            const numeroTranslation: Translation<Numero> = to.Translation<Numero>(3)
            const numerosTranslation: Translation<Numeros> = to.Translation<Numeros>(3)
        })
    })

    describe('of', () => {
        it('works like a normal Of, for Units', () => {
            const numero: Of<Numero> = customOf.Numero(3)
            const numeros: Of<Numeros> = customOf.Numeros(3)

            const useOfNumero: Translation<Numero> = to.Translation(customOf.Numero(3))
            const useOfNumeros: Translation<Numeros> = to.Translation(customOf.Numeros(3))
        })
    })

    describe('from', () => {
        it('works like a normal From, for Units', () => {
            const numero: number = customFrom.Numero(customTo.Numero(3))
            const numeros: number[] = customFrom.Numeros(customTo.Numeros([ 3 ]))
        })
    })
})
