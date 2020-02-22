// tslint:disable

// There should be 175 errors in this file when the below is uncommented.

// import {
//     as,
//     Base,
//     Cents,
//     computeNominalInterface,
//     cubeRoot,
//     CustomAs,
//     Denominator,
//     difference,
//     DUMMY_VALUE_FOR_COMPUTING_NOMINAL_INTERFACE,
//     Exponent,
//     Hz,
//     INITIAL,
//     insteadOf,
//     Integer,
//     Remaindee,
//     Logarithm,
//     modulus,
//     Modulus,
//     Ms,
//     Multiple,
//     NominalInterface,
//     Numerator,
//     Of,
//     ofNotAs,
//     Ordinal,
//     Power,
//     product,
//     quotient,
//     reciprocal,
//     Rotation,
//     Scalar,
//     squareRoot,
//     sum,
//     Translation,
//     NormalScalar,
//     use, Point, integerDivide,
// } from '../../../src/indexForTest'
// import { Arc, Delta, Interval } from '../../../src/nominal'
//
// describe('anti test', (): void => {
//     describe('as', (): void => {
//         describe('units', (): void => {
//             it('DOES NOT ALLOW assignment as units from raw numbers (which is not using `as`, but why we need `as`)', (): void => {
//                 const hzFromRaw: Hz = 3
//             })
//
//             it('DOES NOT ALLOW assignment as units by as\'ing (which is not using `as`, but why we need `as`)', (): void => {
//                 3 as Hz
//             })
//
//             it('DOES NOT ALLOW assignment as raw numbers', (): void => {
//                 const hzAsRaw: number = as.Hz(3)
//             })
//
//             it('DOES NOT ALLOW assignment as the wrong unit', (): void => {
//                 const hzAsMs: Ms = as.Hz(3)
//             })
//
//             it('DOES NOT ALLOW re-assignment as the same unit', (): void => {
//                 as.Hz(as.Hz(3))
//             })
//
//             it('DOES NOT ALLOW direct conversion from one unit into another, whether directly or intermediated by an explicit varible', (): void => {
//                 const intermediaryVariableMs: Ms = as.Ms(3)
//                 const centsFromExplicitMsVariable: Cents = as.Cents(intermediaryVariableMs)
//
//                 const centsFromAsMsDirectly: Cents = as.Cents(as.Ms(3))
//             })
//
//             it('DOES NOT ALLOW unholy hybrids of units', (): void => {
//                 const centsMsFromMs: Cents<Ms> = 3 as any
//                 const msCentsFromMs: Ms<Cents> = 3 as any
//             })
//
//             it('DOES NOT ALLOW units of uses', (): void => {
//                 const centsOfScalar: Cents<Scalar> = 3 as any
//             })
//         })
//
//         describe('uses', (): void => {
//             it('DOES NOT ALLOW direct conversion from one use into another, whether directly or mediated by an explicit variable', (): void => {
//                 const intermediateVariableRotation: Rotation = as.Rotation(3)
//                 const scalarFromExplicitRotationVariable: Scalar = as.Scalar(intermediateVariableRotation)
//
//                 const scalarFromRotationDirectly: Scalar = as.Scalar(as.Rotation(3))
//             })
//
//             it('DOES NOT ALLOW assignment as uses from raw numbers (which is not using `as`, but why we need `as`)', (): void => {
//                 const rotationFromRaw: Rotation = 3
//             })
//
//             it('DOES NOT ALLOW assignment as uses by as\'ing (which is not using `as`, but why we need `as`)', (): void => {
//                 3 as Rotation
//             })
//
//             it('DOES NOT ALLOW assignment as raw numbers', (): void => {
//                 const rotationAsRaw: number = as.Rotation(3)
//             })
//
//             it('DOES NOT ALLOW assignment as the wrong use', (): void => {
//                 const rotationAsScalar: Scalar = as.Rotation(3)
//             })
//
//             it('DOES NOT allow nesting of uses', (): void => {
//                 as.Rotation(as.Scalar(3))
//             })
//         })
//
//         describe('units and uses', (): void => {
//             it('DOES NOT ALLOW creating a use out of a unit', (): void => {
//                 as.Scalar(as.Hz(3))
//             })
//
//             it('DOES NOT ALLOW assigning a use as a unit', (): void => {
//                 const hzScalar: Hz = as.Scalar(3)
//             })
//
//             it('DOES NOT ALLOW assigning something with both units and type as either the wrong units or the wrong type', (): void => {
//                 const scalarHzAsWrongHz: Rotation<Hz> = as.Hz(as.Scalar(3))
//                 const scalarHzAsScalarWrong: Scalar<Cents> = as.Hz(as.Scalar(3))
//                 const scalarHzAsWrongWrong: Rotation<Cents> = as.Hz(as.Scalar(3))
//             })
//
//             it('DOES NOT ALLOW choosing the wrong type parameter', (): void => {
//                 const rotationScalar: Scalar<Translation> = as.Scalar<Rotation>(3)
//                 const scalarScalar: Translation<Rotation> = as.Scalar<Rotation>(3)
//                 const hzScalar: Scalar<Ms> = as.Scalar<Hz>(3)
//                 const msScalar: Rotation<Hz> = as.Scalar<Hz>(3)
//             })
//
//             it('DOES NOT ALLOW assigning a mere use as a use Of something', (): void => {
//                 const scalarAsScalarOfUnits: Scalar<Ms> = as.Scalar(2)
//                 const scalarExplicitlyOnlyOfNumberAsScalarOfUnits: Scalar<Ms> = as.Scalar<number>(2)
//
//                 const scalarAsScalarOfUnitsByAssertion: Scalar<Ms> = 2 as unknown as Scalar
//                 const scalarExplicitlyOnlyOfNumberAsScalarOfUnitsByAssertion: Scalar<Ms> = 2 as unknown as Scalar<number>
//
//                 const scalarAsScalarOfUse: Scalar<Rotation> = as.Scalar(2)
//
//                 const inverseProblemAssigningAScalarOfAUnitToAPlainScalar: Scalar = 2 as unknown as Scalar<Ms>
//
//                 const inverseProblemAssigningAScalarOfAUnitToAPlainScalarByAsing: Scalar = as.Scalar<Ms>(3)
//                 const inverseProblemAssigningAScalarOfAUseToAPlainScalarByAsing: Scalar = as.Scalar<Rotation>(3)
//             })
//
//             it('DOES NOT ALLOW making an non-integer use of an integer unit or use', (): void => {
//                 3 as unknown as Scalar<Multiple>
//                 3 as unknown as Scalar<Numerator>
//
//                 as.Scalar<Multiple>(3)
//                 as.Scalar<Numerator>(3)
//             })
//         })
//
//         describe('special units/uses', (): void => {
//             it('DOES NOT ALLOW creating rationals out of mere numbers', (): void => {
//                 as.Rational([ 4, 4 ])
//             })
//
//             it('DOES NOT ALLOW making special units if they are some other Units (not Integers)', (): void => {
//                 as.Numerator(as.Hz(3))
//                 as.Denominator(as.Hz(3))
//             })
//
//             it('DOES NOT ALLOW making special units of some other Units', (): void => {
//                 const numeratorHz: Numerator<Hz> = 3 as any as Numerator<Hz>
//                 const denominatorHz: Denominator<Hz> = 3 as any as Denominator<Hz>
//             })
//
//             it('DOES NOT ALLOW these oddities for Ordinal', (): void => {
//                 const nestedIndexIndex: Ordinal = as.Ordinal(as.Ordinal(3))
//                 const indexWrongScalar: Scalar = as.Ordinal(3)
//             })
//
//             it('DOES NOT ALLOW same as above but for special uses', (): void => {
//                 const indexAsIndexOfUnits: Ordinal<Ms[]> = as.Ordinal(2)
//                 const indexExplictlyOfPlainNumberArrayAsIndexOfUnits: Ordinal<Ms[]> = as.Ordinal<number[]>(2)
//
//                 const indexAsIndexOfUnitsByAssertion: Ordinal<Ms[]> = 2 as unknown as Ordinal
//                 const indexExplictlyOfPlainNumberArrayAsIndexOfUnitsByAssertion: Ordinal<Ms[]> = 2 as unknown as Ordinal<number[]>
//
//                 const indexAsIndexOfUse: Ordinal<Rotation[]> = as.Ordinal(2)
//
//                 const inverseProblemAssigningIndexOfUnitsToPlainIndex: Ordinal = 2 as unknown as Ordinal<Ms[]>
//             })
//
//             it('DOES NOT ALLOW assigning integerlike ones as plain numbers', (): void => {
//                 const cardinalNumber: number = as.Cardinal(3)
//                 const numeratorNumber: number = as.Numerator(3)
//                 const denominatorNumber: number = as.Denominator(3)
//                 const ordinalNumber: number = as.Ordinal(3)
//                 const multipleNumber: number = as.Multiple(3)
//             })
//
//             it('DOES NOT ALLOW making uses of NormalScalars, besides NormalScalar of NormalScalar', (): void => {
//                 as.Scalar<NormalScalar>(4)
//                 as.Power<NormalScalar>(4)
//                 as.Base<NormalScalar>(4)
//                 as.Logarithm<NormalScalar>(4)
//                 as.Exponent<NormalScalar>(4)
//                 as.Multiple<NormalScalar>(4)
//             })
//
//             it('DOES NOT ALLOW assigning less specific uses (unit, integer) as the more specific counterparts', (): void => {
//                 const scalarAsNormalScalar: NormalScalar = as.Scalar(0.5)
//
//                 const scalarAsMultiple: Multiple = as.Scalar(5)
//                 const logarithmAsBase: Base = as.Logarithm(5)
//                 const exponentAsPower: Power = as.Exponent(5)
//             })
//
//             it('DOES NOT ALLOW being a use of another use', (): void => {
//                 3 as unknown as Point<Scalar>
//                 as.Point<Point>(3)
//             })
//         })
//     })
//
//     describe('use', (): void => {
//         it('DOES NOT ALLOW using a Scalar as a Normal Scalar', (): void => {
//             use.Scalar(as.NormalScalar(0.5), 4 as unknown as Scalar<NormalScalar>)
//         })
//
//         it('DOES NOT ALLOW using Unwhole Uses on Whole numbers', (): void => {
//             use.Scalar(as.Ordinal(3), 4 as unknown as Scalar<Number & { _TestBrand: 'Test' }>)
//             use.Translation(as.Ordinal(3), 4 as unknown as Translation<Number & { _TestBrand: 'Test' }>)
//             use.Rotation(as.Ordinal(3), 4 as unknown as Rotation<Number & { _TestBrand: 'Test' }>)
//
//             use.Exponent(as.Ordinal(3), 4 as unknown as Exponent<Number & { _TestBrand: 'Test' }>)
//             use.Logarithm(as.Ordinal(3), 4 as unknown as Logarithm<Number & { _TestBrand: 'Test' }>)
//             use.Modulus(as.Ordinal(3), 4 as unknown as Modulus<Number & { _TestBrand: 'Test' }>)
//
//             use.Interval(as.Ordinal(3), 4 as unknown as Interval<Number & { _TestBrand: 'Test' }>)
//             use.Delta(as.Ordinal(3), 4 as unknown as Delta<Number & { _TestBrand: 'Test' }>)
//             use.Arc(as.Ordinal(3), 4 as unknown as Arc<Number & { _TestBrand: 'Test' }>)
//         })
//     })
//
//     describe('instead of', (): void => {
//         const wrongOf: Ordinal<Translation[]> = insteadOf<Ordinal, Scalar>(INITIAL)
//         const noOf: Ordinal = insteadOf<Ordinal, Scalar>(INITIAL)
//         const fromFullOf: Scalar<Exponent> = insteadOf<Scalar, Rotation>(as.Scalar<Translation>(1))
//         const doesntHoldOnAsInstead: Ordinal<string> = insteadOf<Ordinal>(as.Ordinal<string>(1))
//         const doesntAssignAsWrongInstead: Ordinal<Scalar[]> = insteadOf<Ordinal>(as.Ordinal<string>(1))
//     })
//
//     describe('ofNotAs', (): void => {
//         it(`DOES NOT ALLOW from the wrong units or use`, (): void => {
//             const ofFromWrongUse: Of<Rotation> = ofNotAs(as.Translation(3))
//             const ofFromWrongUnits: Of<Hz> = ofNotAs(as.Ms(3))
//
//             const ofFromWrongUseStraightAsUse: Scalar<Rotation> = as.Scalar(ofNotAs(as.Translation(3)))
//             const ofFromWrongUnitsStraightAsUse: Scalar<Hz> = as.Scalar(ofNotAs(as.Ms(3)))
//
//             const ofFromUseOfWrongUse: Of<Scalar<Rotation>> = ofNotAs(as.Scalar<Translation>(3))
//             const ofFromUseOfWrongUnits: Of<Scalar<Hz>> = ofNotAs(as.Scalar<Ms>(3))
//             const ofFromWrongUseOfUse: Of<Rotation<Translation>> = ofNotAs(as.Scalar<Translation>(3))
//             const ofFromWrongUseOfUnits: Of<Rotation<Ms>> = ofNotAs(as.Scalar<Ms>(3))
//
//             const ofFromUseOfWrongUseStraightAsUse: Rotation<Scalar<Rotation>> = as.Rotation(ofNotAs(as.Scalar<Translation>(3)))
//             const ofFromUseOfWrongUnitsStraightAsUse: Rotation<Scalar<Hz>> = as.Rotation(ofNotAs(as.Scalar<Ms>(3)))
//             const ofFromWrongUseOfUseStraightAsUse: Rotation<Rotation<Translation>> = as.Rotation(ofNotAs(as.Scalar<Translation>(3)))
//             const ofFromWrongUseOfUnitsStraightAsUse: Rotation<Rotation<Ms>> = as.Rotation(ofNotAs(as.Scalar<Ms>(3)))
//         })
//     })
//
//     describe('custom nominals', (): void => {
//         type Numero = Number & { _NominalBrand: 'Numero' }
//         type Numeros = Number[] & { _NominalBrand: 'Numeros' }
//
//         let customAs: CustomAs<TestNominalInterfaceOptionObject>
//
//         interface TestNominalInterfaceOptionObject {
//             number: { Numero: Numero },
//             numericArray: { Numeros: Numeros }
//         }
//
//         beforeEach((): void => {
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
//         })
//
//         it('DOES NOT ALLOW the same things a normal As, for Units does not allow', (): void => {
//             const numeroAsRaw: number = customAs.Numero(3)
//             const numerosAsRaw: number[] = customAs.Numeros([ 3 ])
//             const rawAsNumero: Numero = 3
//             const rawAsNumeros: Numeros = [ 3 ]
//             const numerosAsNumero: Numero = customAs.Numeros([ 3 ])
//             const numeroAsNumeros: Numeros = customAs.Numero(3)
//         })
//     })
//
//     describe('typed uses', (): void => {
//         describe('sum', (): void => {
//             it('does not work for most Uses', (): void => {
//                 sum(as.Scalar(3), as.Scalar(4))
//                 sum(as.Rotation(3), as.Rotation(4))
//                 sum(as.Exponent(3), as.Exponent(4))
//                 sum(as.Logarithm(3), as.Logarithm(4))
//                 sum(as.Modulus(3), as.Modulus(4))
//
//                 sum(as.Multiple(3), as.Multiple(4))
//                 sum(as.Transposition(3), as.Transposition(4))
//                 sum(as.Power(3), as.Power(4))
//                 sum(as.Base(3), as.Base(4))
//                 sum(as.Remaindee(3), as.Remaindee(4))
//
//                 sum(as.NormalScalar(0.3), as.NormalScalar(0.4))
//             })
//         })
//
//         describe('product', (): void => {
//             it('does not work for most Uses', (): void => {
//                 product(as.Translation(3), as.Translation(4))
//                 product(as.Rotation(3), as.Rotation(4))
//                 product(as.Exponent(3), as.Exponent(4))
//                 product(as.Logarithm(3), as.Logarithm(4))
//                 product(as.Modulus(3), as.Modulus(4))
//
//                 product(as.Cardinal(3), as.Cardinal(4))
//                 product(as.Transposition(3), as.Transposition(4))
//                 product(as.Power(3), as.Power(4))
//                 product(as.Base(3), as.Base(4))
//                 product(as.Remaindee(3), as.Remaindee(4))
//             })
//         })
//
//         describe('difference', (): void => {
//             it('does not work for most Uses', (): void => {
//                 difference(as.Scalar(3), as.Scalar(4))
//                 difference(as.Rotation(3), as.Rotation(4))
//                 difference(as.Exponent(3), as.Exponent(4))
//                 difference(as.Logarithm(3), as.Logarithm(4))
//                 difference(as.Modulus(3), as.Modulus(4))
//
//                 difference(as.Multiple(3), as.Multiple(4))
//                 difference(as.Transposition(3), as.Transposition(4))
//                 difference(as.Power(3), as.Power(4))
//                 difference(as.Base(3), as.Base(4))
//                 difference(as.Remaindee(3), as.Remaindee(4))
//
//                 difference(as.NormalScalar(0.3), as.NormalScalar(0.4))
//             })
//         })
//
//         describe('quotient', (): void => {
//             it('does not work for most Uses', (): void => {
//                 quotient(as.Translation(3), as.Translation(4))
//                 quotient(as.Rotation(3), as.Rotation(4))
//                 quotient(as.Exponent(3), as.Exponent(4))
//                 quotient(as.Logarithm(3), as.Logarithm(4))
//                 quotient(as.Modulus(3), as.Modulus(4))
//
//                 quotient(as.Cardinal(3), as.Cardinal(4))
//                 quotient(as.Transposition(3), as.Transposition(4))
//                 quotient(as.Power(3), as.Power(4))
//                 quotient(as.Base(3), as.Base(4))
//                 quotient(as.Remaindee(3), as.Remaindee(4))
//             })
//
//             it('when given an integer, removes the integer type in the return value', (): void => {
//                 const integer: Integer = quotient(as.Integer(3), as.Integer(3))
//                 const numerator: Numerator = quotient(as.Numerator(3), as.Numerator(3))
//                 const denominator: Denominator = quotient(as.Denominator(3), as.Denominator(3))
//             })
//         })
//
//         describe('modulus', (): void => {
//             it('when given an integer, removes the integer type in the return value', (): void => {
//                 const integer: Integer = modulus(as.Integer(3), as.Integer(3))
//                 const numerator: Numerator = modulus(as.Numerator(3), as.Numerator(3))
//                 const denominator: Denominator = modulus(as.Denominator(3), as.Denominator(3))
//             })
//         })
//
//         describe('reciprocal', (): void => {
//             it('when given an integer, removes the integer type in the return value', (): void => {
//                 const integer: Integer = reciprocal(as.Integer(3))
//                 const numerator: Numerator = reciprocal(as.Numerator(3))
//                 const denominator: Denominator = reciprocal(as.Denominator(3))
//
//                 const multiple: Multiple = reciprocal(as.Multiple(3))
//                 const base: Base = reciprocal(as.Base(3))
//                 const power: Power = reciprocal(as.Power(3))
//                 const integerModulus: Remaindee = reciprocal(as.Remaindee(3))
//             })
//         })
//
//         describe('cubeRoot', (): void => {
//             it('when given an integer, removes the integer type in the return value', (): void => {
//                 const integer: Integer = cubeRoot(as.Integer(3))
//                 const numerator: Numerator = cubeRoot(as.Numerator(3))
//                 const denominator: Denominator = cubeRoot(as.Denominator(3))
//
//                 const multiple: Multiple = cubeRoot(as.Multiple(3))
//                 const base: Base = cubeRoot(as.Base(3))
//                 const power: Power = cubeRoot(as.Power(3))
//                 const integerModulus: Remaindee = cubeRoot(as.Remaindee(3))
//             })
//         })
//
//         describe('squareRoot', (): void => {
//             it('when given an integer, removes the integer type in the return value', (): void => {
//                 const integer: Integer = squareRoot(as.Integer(3))
//                 const numerator: Numerator = squareRoot(as.Numerator(3))
//                 const denominator: Denominator = squareRoot(as.Denominator(3))
//
//                 const multiple: Multiple = squareRoot(as.Multiple(3))
//                 const base: Base = squareRoot(as.Base(3))
//                 const power: Power = squareRoot(as.Power(3))
//                 const integerModulus: Remaindee = squareRoot(as.Remaindee(3))
//             })
//         })
//     })
//
//     describe('divides evenly', (): void => {
//         describe('integer divide', (): void => {
//             it('does not allow assigning to an unwhole number', (): void => {
//                 expect(integerDivide(as.Scalar(5), 2))
//                     .toEqual(as.Scalar(2))
//             })
//         })
//     })
// })
