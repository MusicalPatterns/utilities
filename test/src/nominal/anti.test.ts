// tslint:disable

// There should be 174 errors in this file when the below is uncommented.

// import {
//     as,
//     Base,
//     Cents,
//     computeNominalInterface,
//     cubeRoot,
//     CustomAs,
//     CustomNotAs,
//     CustomOf,
//     Denominator,
//     DUMMY_VALUE_FOR_COMPUTING_NOMINAL_INTERFACE,
//     Exponent,
//     Hz,
//     INITIAL,
//     insteadOf,
//     Integer,
//     IntegerModulus,
//     modulus,
//     Ms,
//     Multiple,
//     NominalInterface,
//     NormalScalar,
//     notAs,
//     Numerator,
//     of,
//     Of,
//     ofNotAs,
//     Ordinal,
//     Power,
//     quotient,
//     reciprocal,
//     Rotation,
//     Scalar,
//     squareRoot,
//     Translation,
//     use,
// } from '../../../src/indexForTest'
//
// describe('anti test', () => {
//     describe('as', () => {
//         describe('units', () => {
//             it('DOES NOT ALLOW assignment as units from raw numbers (which is not using `as`, but why we need `as`)', () => {
//                 const hzFromRaw: Hz = 3
//             })
//
//             it('DOES NOT ALLOW assignment as units by as\'ing (which is not using `as`, but why we need `as`)', () => {
//                 3 as Hz
//             })
//
//             it('DOES NOT ALLOW assignment as raw numbers', () => {
//                 const hzToRaw: number = as.Hz(3)
//             })
//
//             it('DOES NOT ALLOW assignment as the wrong unit', () => {
//                 const hzToMs: Ms = as.Hz(3)
//             })
//
//             it('DOES NOT ALLOW re-assignment as the same unit', () => {
//                 as.Hz(as.Hz(3))
//             })
//
//             it('DOES NOT ALLOW direct conversion from one unit into another, whether directly or intermediated by an explicit varible', () => {
//                 const intermediaryVariableMs: Ms = as.Ms(3)
//                 const centsFromExplicitMsVariable: Cents = as.Cents(intermediaryVariableMs)
//
//                 const centsFromToMsDirectly: Cents = as.Cents(as.Ms(3))
//             })
//
//             it('DOES NOT ALLOW unholy hybrids of units', () => {
//                 const centsMsFromMs: Cents<Ms> = 3 as any
//                 const msCentsFromMs: Ms<Cents> = 3 as any
//             })
//
//             it('DOES NOT ALLOW units of uses', () => {
//                 const centsOfScalar: Cents<Scalar> = 3 as any
//             })
//         })
//
//         describe('uses', () => {
//             it('DOES NOT ALLOW direct conversion from one use into another, whether directly or mediated by an explicit variable', () => {
//                 const intermediateVariableRotation: Rotation = as.Rotation(3)
//                 const scalarFromExplicitRotationVariable: Scalar = as.Scalar(intermediateVariableRotation)
//
//                 const scalarFromRotationDirectly: Scalar = as.Scalar(as.Rotation(3))
//             })
//
//             it('DOES NOT ALLOW assignment as uses from raw numbers (which is not using `as`, but why we need `as`)', () => {
//                 const rotationFromRaw: Rotation = 3
//             })
//
//             it('DOES NOT ALLOW assignment as uses by as\'ing (which is not using `as`, but why we need `as`)', () => {
//                 3 as Rotation
//             })
//
//             it('DOES NOT ALLOW assignment as raw numbers', () => {
//                 const rotationToRaw: number = as.Rotation(3)
//             })
//
//             it('DOES NOT ALLOW assignment as the wrong use', () => {
//                 const rotationToScalar: Scalar = as.Rotation(3)
//             })
//
//             it('DOES NOT allow nesting of uses', () => {
//                 as.Rotation(as.Scalar(3))
//             })
//         })
//
//         describe('units and uses', () => {
//             it('DOES NOT ALLOW creating a use out of a unit', () => {
//                 as.Scalar(as.Hz(3))
//             })
//
//             it('DOES NOT ALLOW assigning a use as a unit', () => {
//                 const hzScalar: Hz = as.Scalar(3)
//             })
//
//             it('DOES NOT ALLOW assigning something with both units and type as either the wrong units or the wrong type', () => {
//                 const scalarHzAsWrongHz: Rotation<Hz> = as.Hz(as.Scalar(3))
//                 const scalarHzAsScalarWrong: Scalar<Cents> = as.Hz(as.Scalar(3))
//                 const scalarHzAsWrongWrong: Rotation<Cents> = as.Hz(as.Scalar(3))
//             })
//
//             it('DOES NOT ALLOW choosing the wrong type parameter', () => {
//                 const rotationScalar: Scalar<Translation> = as.Scalar<Rotation>(3)
//                 const scalarScalar: Translation<Rotation> = as.Scalar<Rotation>(3)
//                 const hzScalar: Scalar<Ms> = as.Scalar<Hz>(3)
//                 const msScalar: Rotation<Hz> = as.Scalar<Hz>(3)
//             })
//
//             it('DOES NOT ALLOW assigning a mere use as a use Of something', () => {
//                 const scalarToScalarOfUnits: Scalar<Ms> = as.Scalar(2)
//                 const asdgsdaggdsdgsdgdgsd: Scalar<Ms> = as.Scalar<number>(2)
//
//                 const asg: Scalar<Ms> = 2 as unknown as Scalar
//                 const asgg: Scalar<Ms> = 2 as unknown as Scalar<number>
//
//                 const scalarToScalarOfUse: Scalar<Rotation> = as.Scalar(2)
//
//                 const thing: Scalar<Ms> = 2 as unknown as Scalar
//                 const thing2: Scalar = 2 as unknown as Scalar<Ms>
//
//                 const never: Scalar = as.Scalar<Ms>(3)
//                 const never2: Scalar = as.Scalar<Rotation>(3)
//             })
//
//             it('DOES NOT ALLOW making an non-integer use of an integer unit or use', () => {
//                 3 as unknown as Scalar<Multiple>
//                 3 as unknown as Scalar<Numerator>
//
//                 as.Scalar<Multiple>(3)
//                 as.Scalar<Numerator>(3)
//             })
//         })
//
//         describe('special units/uses', () => {
//             it('DOES NOT ALLOW creating fractions out of mere numbers', () => {
//                 as.Fraction([ 4, 4 ])
//             })
//
//             it('DOES NOT ALLOW making special units if they are some other Units (not Integers)', () => {
//                 as.Numerator(as.Hz(3))
//                 as.Denominator(as.Hz(3))
//             })
//
//             it('DOES NOT ALLOW making special units of some other Units', () => {
//                 const numeratorHz: Numerator<Hz> = 3 as any as Numerator<Hz>
//                 const denominatorHz: Denominator<Hz> = 3 as any as Denominator<Hz>
//             })
//
//             it('DOES NOT ALLOW these oddities for Ordinal', () => {
//                 const nestedIndexIndex: Ordinal = as.Ordinal(as.Ordinal(3))
//                 const indexWrongScalar: Scalar = as.Ordinal(3)
//             })
//
//             it('DOES NOT ALLOW same as above but for special uses', () => {
//                 const indexToIndexOfUnits: Ordinal<Ms[]> = as.Ordinal(2)
//                 const asdgsdaggdsdgsdgdgsd: Ordinal<Ms[]> = as.Ordinal<number[]>(2)
//
//                 const asg: Ordinal<Ms[]> = 2 as unknown as Ordinal
//                 const asgg: Ordinal<Ms[]> = 2 as unknown as Ordinal<number[]>
//
//                 const indexToIndexOfUse: Ordinal<Rotation[]> = as.Ordinal(2)
//
//                 const thing: Ordinal<Ms[]> = 2 as unknown as Ordinal
//                 const thing2: Ordinal = 2 as unknown as Ordinal<Ms[]>
//             })
//
//             it('DOES NOT ALLOW assigning integerlike ones as plain numbers', () => {
//                 const cardinalNumber: number = as.Cardinal(3)
//                 const numeratorNumber: number = as.Numerator(3)
//                 const denominatorNumber: number = as.Denominator(3)
//                 const ordinalNumber: number = as.Ordinal(3)
//                 const multipleNumber: number = as.Multiple(3)
//             })
//
//             it('DOES NOT ALLOW making uses of NormalScalars, besides NormalScalar of NormalScalar', () => {
//                 as.Scalar<NormalScalar>(4)
//                 as.Power<NormalScalar>(4)
//                 as.Base<NormalScalar>(4)
//                 as.Logarithm<NormalScalar>(4)
//                 as.Exponent<NormalScalar>(4)
//                 as.Multiple<NormalScalar>(4)
//             })
//
//             it('DOES NOT ALLOW assigning less specific uses (normal, integer) as the more specific counterparts', () => {
//                 const scalarToNormalScalar: NormalScalar = as.Scalar(0.5)
//
//                 const scalarToMultiple: Multiple = as.Scalar(5)
//                 const logarithmToBase: Base = as.Logarithm(5)
//                 const exponentToPower: Power = as.Exponent(5)
//             })
//         })
//     })
//
//     describe('notAs', () => {
//         it('DOES NOT ALLOW taking a plain number', () => {
//             notAs.Hz(3)
//             notAs.Scalar(3)
//         })
//
//         it('DOES NOT ALLOW taking the wrong units or uses', () => {
//             notAs.Hz(as.Ms(3))
//             notAs.Scalar(as.Rotation(3))
//         })
//
//         it('DOES NOT ALLOW taking the wrong type of nominal', () => {
//             notAs.Hz(as.Scalar(3))
//             notAs.Scalar(as.Hz(3))
//         })
//
//         describe('special units/uses', () => {
//             it('DOES NOT ALLOW taking plain numbers', () => {
//                 notAs.Cardinal(3)
//                 notAs.Numerator(3)
//                 notAs.Denominator(3)
//                 notAs.Ordinal(3)
//                 notAs.Translation(3)
//                 notAs.Multiple(3)
//             })
//         })
//     })
//
//     describe('use', () => {
//         it('DOES NOT ALLOW using a Scalar as a Normal Scalar', () => {
//             use.Scalar(as.NormalScalar(0.5), 4 as unknown as Scalar<NormalScalar>)
//         })
//     })
//
//     describe('of', () => {
//         it('DOES NOT ALLOW assigning an Of as the actual thing', () => {
//             const isNotActuallyUnits: Hz = of.Hz(3)
//             const isNotActuallyUse: Scalar = of.Scalar(3)
//         })
//
//         it('DOES NOT ALLOW assigning an Of as an Of of the wrong type', () => {
//             const ofWrongUnits: Of<Ms> = of.Hz(3)
//             const ofWrongUse: Of<Rotation> = of.Scalar(3)
//         })
//
//         it('DOES NOT ALLOW assigning Of types that are uses of units when its wrong types', () => {
//             const wrongUnits: Of<Scalar<Hz>> = of.Scalar<Ms>(3)
//             const wrongUse: Of<Rotation<Hz>> = of.Scalar<Hz>(3)
//         })
//
//         it('DOES NOT ALLOW assigning allows Of types that are uses of uses when its switched types', () => {
//             const nestedOf: Of<Rotation<Scalar>> = of.Scalar<Rotation>(3)
//         })
//
//         it('DOES NOT ALLOW assigning allows Of types that are uses of uses when its double type of itself as itself', () => {
//             const nestedOf: Of<Scalar> = of.Scalar<Scalar>(3)
//             const nestedOfOtherUse: Of<Scalar> = of.Scalar<Rotation>(3)
//             const nestedOfOtherUseFirst: Of<Scalar> = of.Rotation<Scalar>(3)
//         })
//
//         it('DOES NOT ALLOW assigning allows Of types that are uses of uses when its wrong inner type', () => {
//             const nestedOf: Of<Scalar<Rotation>> = of.Scalar<Exponent>(3)
//         })
//
//         it('DOES NOT ALLOW assigning allows Of types that are uses of uses when its wrong outer type', () => {
//             const nestedOf: Of<Scalar<Rotation>> = of.Exponent<Rotation>(3)
//         })
//
//         it('DOES NOT ALLOW creating uses of units when its wrong units', () => {
//             const scalarOfHz: Scalar<Ms> = as.Scalar(of.Hz(3))
//         })
//
//         it('DOES NOT ALLOW creating uses of uses when its wrong use', () => {
//             const scalarOfRotation: Scalar<Rotation> = as.Scalar(of.Exponent(3))
//         })
//
//         it('DOES NOT ALLOW creating uses of uses of units when its wrong units', () => {
//             const scalarOfScalarOfHz: Scalar<Scalar<Hz>> = as.Scalar(of.Scalar<Ms>(3))
//         })
//
//         it('DOES NOT ALLOW creating uses of uses of units when its wrong use', () => {
//             const scalarOfScalarOfHz: Scalar<Scalar<Hz>> = as.Scalar(of.Rotation<Hz>(3))
//         })
//
//         it('DOES NOT ALLOW assigning an Of of a use as an Of of a use of units or use', () => {
//             const cantAssignAsResultOfAsingUnits: Of<Scalar<Ms>> = 3 as unknown as Of<Scalar>
//             const cantAssignAsResultOfAsingUse: Of<Scalar<Rotation>> = 3 as unknown as Of<Scalar>
//
//             const cantAssignNonNestedToNestedUnits: Of<Scalar<Ms>> = of.Scalar<number>(3)
//             const cantAssignNonNestedToNestedUse: Of<Scalar<Rotation>> = of.Scalar<number>(3)
//
//             const cantAssignNonNestedToNestedUnitsWithoutExplicitParameter: Of<Scalar<Ms>> = of.Scalar(3)
//             const cantAssignNonNestedToNestedUseWithoutExplicitParameter: Of<Scalar<Rotation>> = of.Scalar(3)
//
//             const cantAssignToUseOfUseOfUnitsFromUseOfUse: Scalar<Scalar<Ms>> = as.Scalar(of.Scalar(3))
//             const cantAssignToUseOfUseOfUseFromUseOfUse: Scalar<Scalar<Rotation>> = as.Scalar(of.Scalar(3))
//
//             const cantAssignToUseOfUseOfUnitsFromUseOfUseUsingTypeParam: Scalar<Scalar<Ms>> = as.Scalar<Scalar>(3)
//             const cantAssignToUseOfUseOfUseFromUseOfUseUsingTypeParam: Scalar<Scalar<Rotation>> = as.Scalar<Scalar>(3)
//         })
//
//         it('DOES NOT ALLOW calling Of on something that is already Of', () => {
//             const replaceUnitsWithUse: Of<Scalar> = of.Scalar(of.Hz(3))
//             const replaceUseWithUse: Of<Scalar> = of.Scalar(of.Rotation(3))
//             const replaceUseWithUnits: Of<Hz> = of.Hz(of.Scalar(3))
//         })
//     })
//
//     describe('instead of', () => {
//         const wrongOf: Ordinal<Translation[]> = insteadOf<Ordinal, Scalar>(INITIAL)
//         const noOf: Ordinal = insteadOf<Ordinal, Scalar>(INITIAL)
//         const fromFullOf: Scalar<Exponent> = insteadOf<Scalar, Rotation>(as.Scalar<Translation>(1))
//         const doesntHoldOnToInstead: Ordinal<string> = insteadOf<Ordinal>(as.Ordinal<string>(1))
//         const doesntAssignToWrongInstead: Ordinal<Scalar[]> = insteadOf<Ordinal>(as.Ordinal<string>(1))
//     })
//
//     describe('ofNotAs', () => {
//         it(`DOES NOT ALLOW from the wrong units or use`, () => {
//             const ofFromWrongUse: Of<Rotation> = ofNotAs(as.Translation(3))
//             const ofFromWrongUnits: Of<Hz> = ofNotAs(as.Ms(3))
//
//             const ofFromWrongUseStraightToUse: Scalar<Rotation> = as.Scalar(ofNotAs(as.Translation(3)))
//             const ofFromWrongUnitsStraightToUse: Scalar<Hz> = as.Scalar(ofNotAs(as.Ms(3)))
//
//             const ofFromUseOfWrongUse: Of<Scalar<Rotation>> = ofNotAs(as.Scalar<Translation>(3))
//             const ofFromUseOfWrongUnits: Of<Scalar<Hz>> = ofNotAs(as.Scalar<Ms>(3))
//             const ofFromWrongUseOfUse: Of<Rotation<Translation>> = ofNotAs(as.Scalar<Translation>(3))
//             const ofFromWrongUseOfUnits: Of<Rotation<Ms>> = ofNotAs(as.Scalar<Ms>(3))
//
//             const ofFromUseOfWrongUseStraightToUse: Rotation<Scalar<Rotation>> = as.Rotation(ofNotAs(as.Scalar<Translation>(3)))
//             const ofFromUseOfWrongUnitsStraightToUse: Rotation<Scalar<Hz>> = as.Rotation(ofNotAs(as.Scalar<Ms>(3)))
//             const ofFromWrongUseOfUseStraightToUse: Rotation<Rotation<Translation>> = as.Rotation(ofNotAs(as.Scalar<Translation>(3)))
//             const ofFromWrongUseOfUnitsStraightToUse: Rotation<Rotation<Ms>> = as.Rotation(ofNotAs(as.Scalar<Ms>(3)))
//         })
//     })
//
//     describe('custom nominals', () => {
//         type Numero = Number & { _NominalBrand: 'Numero' }
//         type Numeros = Number[] & { _NominalBrand: 'Numeros' }
//
//         let customAs: CustomAs<TestNominalInterfaceOptionObject>
//         let customNotAs: CustomNotAs<TestNominalInterfaceOptionObject>
//         let customOf: CustomOf<TestNominalInterfaceOptionObject>
//
//         interface TestNominalInterfaceOptionObject {
//             number: { Numero: Numero },
//             numericArray: { Numeros: Numeros }
//         }
//
//         beforeEach(() => {
//             const nominalInterfaceOptionsObject: TestNominalInterfaceOptionObject = {
//                 number: {
//                     Numero: DUMMY_VALUE_FOR_COMPUTING_NOMINAL_INTERFACE as Numero,
//                 },
//                 numericArray: {
//                     Numeros: DUMMY_VALUE_FOR_COMPUTING_NOMINAL_INTERFACE as Numeros,
//                 },
//             }
//             const nominalInterface: NominalInterface<TestNominalInterfaceOptionObject> =
//                 computeNominalInterface(nominalInterfaceOptionsObject)
//             customAs = nominalInterface.as
//             customNotAs = nominalInterface.notAs
//             customOf = nominalInterface.of
//         })
//
//         describe('as', () => {
//             it('DOES NOT ALLOW the same things a normal As, for Units does not allow', () => {
//                 const numeroToRaw: number = customAs.Numero(3)
//                 const numerosToRaw: number[] = customAs.Numeros([ 3 ])
//                 const rawToNumero: Numero = 3
//                 const rawToNumeros: Numeros = [ 3 ]
//                 const numerosToNumero: Numero = customAs.Numeros([ 3 ])
//                 const numeroToNumeros: Numeros = customAs.Numero(3)
//             })
//         })
//
//         describe('of', () => {
//             it('DOES NOT ALLOW the same things a normal Of, for Units does not allow', () => {
//                 const ofNumeroToActual: Numero = customOf.Numero(3)
//                 const ofNumerosToActual: Numeros = customOf.Numeros(3)
//
//                 const actualNumeroToOf: Of<Numero> = customAs.Numero(3)
//                 const actualNumerosToOf: Of<Numeros> = customAs.Numeros([ 3 ])
//             })
//         })
//
//         describe('notAs', () => {
//             it('DOES NOT ALLOW the same things a normal NotAs, for Units does not allow', () => {
//                 const numero: Numero = customNotAs.Numero(customAs.Numero(3))
//                 const numeros: Numeros = customNotAs.Numeros(customAs.Numeros([ 3 ]))
//             })
//         })
//     })
//
//     describe('typed uses', () => {
//         describe('reciprocal', () => {
//             it('when given an integer, removes the integer type in the return value', () => {
//                 const integer: Integer = reciprocal(as.Integer(3))
//                 const numerator: Numerator = reciprocal(as.Numerator(3))
//                 const denominator: Denominator = reciprocal(as.Denominator(3))
//
//                 const multiple: Multiple = reciprocal(as.Multiple(3))
//                 const base: Base = reciprocal(as.Base(3))
//                 const power: Power = reciprocal(as.Power(3))
//                 const integerModulus: IntegerModulus = reciprocal(as.IntegerModulus(3))
//             })
//         })
//
//         describe('modulus', () => {
//             it('when given an integer, removes the integer type in the return value', () => {
//                 const integer: Integer = modulus(as.Integer(3), as.Integer(3))
//                 const numerator: Numerator = modulus(as.Numerator(3), as.Numerator(3))
//                 const denominator: Denominator = modulus(as.Denominator(3), as.Denominator(3))
//             })
//         })
//
//         describe('cubeRoot', () => {
//             it('when given an integer, removes the integer type in the return value', () => {
//                 const integer: Integer = cubeRoot(as.Integer(3))
//                 const numerator: Numerator = cubeRoot(as.Numerator(3))
//                 const denominator: Denominator = cubeRoot(as.Denominator(3))
//
//                 const multiple: Multiple = cubeRoot(as.Multiple(3))
//                 const base: Base = cubeRoot(as.Base(3))
//                 const power: Power = cubeRoot(as.Power(3))
//                 const integerModulus: IntegerModulus = cubeRoot(as.IntegerModulus(3))
//             })
//         })
//
//         describe('squareRoot', () => {
//             it('when given an integer, removes the integer type in the return value', () => {
//                 const integer: Integer = squareRoot(as.Integer(3))
//                 const numerator: Numerator = squareRoot(as.Numerator(3))
//                 const denominator: Denominator = squareRoot(as.Denominator(3))
//
//                 const multiple: Multiple = squareRoot(as.Multiple(3))
//                 const base: Base = squareRoot(as.Base(3))
//                 const power: Power = squareRoot(as.Power(3))
//                 const integerModulus: IntegerModulus = squareRoot(as.IntegerModulus(3))
//             })
//         })
//
//         describe('quotient', () => {
//             it('when given an integer, removes the integer type in the return value', () => {
//                 const integer: Integer = quotient(as.Integer(3), as.Integer(3))
//                 const numerator: Numerator = quotient(as.Numerator(3), as.Numerator(3))
//                 const denominator: Denominator = quotient(as.Denominator(3), as.Denominator(3))
//
//                 const multiple: Multiple = quotient(as.Multiple(3), as.Multiple(3))
//                 const base: Base = quotient(as.Base(3), as.Base(3))
//                 const power: Power = quotient(as.Power(3), as.Power(3))
//                 const integerModulus: IntegerModulus = quotient(as.IntegerModulus(3), as.IntegerModulus(3))
//             })
//         })
//     })
// })
