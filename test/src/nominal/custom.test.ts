// tslint:disable no-any no-unused-expression comment-format no-commented-code no-dead-store no-type-definitions-outside-types-modules

import {
    as,
    computeNominalInterface,
    CustomAs,
    CustomNotAs,
    CustomOf,
    DUMMY_VALUE_FOR_COMPUTING_NOMINAL_INTERFACE,
    NominalInterface,
    Of,
    Translation,
} from '../../../src/indexForTest'

describe('custom nominals', () => {
    type Numero = Number & { _NominalBrand: 'Numero' }
    type Numeros = Number[] & { _NominalBrand: 'Numeros' }

    let customAs: CustomAs<TestNominalInterfaceOptionObject>
    let customNotAs: CustomNotAs<TestNominalInterfaceOptionObject>
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
        customAs = nominalInterface.as
        customNotAs = nominalInterface.notAs
        customOf = nominalInterface.of
    })

    describe('as', () => {
        it('works like a normal As, for Units', () => {
            const numero: Numero = customAs.Numero(3)
            const numeros: Numeros = customAs.Numeros([ 3 ])

            const numeroTranslation: Translation<Numero> = as.Translation<Numero>(3)
            const numerosTranslation: Translation<Numeros> = as.Translation<Numeros>(3)
        })
    })

    describe('of', () => {
        it('works like a normal Of, for Units', () => {
            const numero: Of<Numero> = customOf.Numero(3)
            const numeros: Of<Numeros> = customOf.Numeros(3)

            const useOfNumero: Translation<Numero> = as.Translation(customOf.Numero(3))
            const useOfNumeros: Translation<Numeros> = as.Translation(customOf.Numeros(3))
        })
    })

    describe('notAs', () => {
        it('works like a normal NotAs, for Units', () => {
            const numero: number = customNotAs.Numero(customAs.Numero(3))
            const numeros: number[] = customNotAs.Numeros(customAs.Numeros([ 3 ]))
        })
    })
})
