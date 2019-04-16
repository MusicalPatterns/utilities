// tslint:disable no-any no-unused-expression comment-format no-commented-code no-dead-store no-type-definitions-outside-types-modules

// There should be 86 errors in this file.

// import {
//     Base,
//     Cardinal,
//     Cents,
//     computeNominalInterface,
//     CustomFrom,
//     CustomOf,
//     CustomTo,
//     Denominator,
//     DUMMY_VALUE_FOR_COMPUTING_NOMINAL_INTERFACE,
//     from,
//     Hz,
//     Index,
//     INITIAL,
//     insteadOf,
//     Ms,
//     NominalInterface,
//     Numerator,
//     of,
//     Of,
//     ofOperation,
//     ofUnits,
//     Rotation,
//     Scalar,
//     to,
//     Translation,
// } from '../../../src/indexForTest'
//
// describe('anti test', () => {
//     describe('to', () => {
//         describe('units', () => {
//             it('DOES NOT ALLOW assignment to units from raw numbers (which is not using `to`, but why we need `to`)', () => {
//                 const hzFromRaw: Hz = 3
//             })
//
//             it('DOES NOT ALLOW assignment to units by as\'ing (which is not using `to`, but why we need `to`)', () => {
//                 3 as Hz
//             })
//
//             it('DOES NOT ALLOW assignment to raw numbers', () => {
//                 const hzToRaw: number = to.Hz(3)
//             })
//
//             it('DOES NOT ALLOW assignment to the wrong unit', () => {
//                 const hzToMs: Ms = to.Hz(3)
//             })
//
//             it('DOES NOT ALLOW re-assignment to the same unit', () => {
//                 to.Hz(to.Hz(3))
//             })
//
//             it('DOES NOT ALLOW direct conversion from one unit into another, whether directly or intermediated by an explicit varible', () => {
//                 const intermediaryVariableMs: Ms = to.Ms(3)
//                 const centsFromExplicitMsVariable: Cents = to.Cents(intermediaryVariableMs)
//
//                 const centsFromToMsDirectly: Cents = to.Cents(to.Ms(3))
//             })
//
//             it('DOES NOT ALLOW unholy hybrids of units', () => {
//                 const centsMsFromMs: Cents<Ms> = 3 as any
//                 const msCentsFromMs: Ms<Cents> = 3 as any
//             })
//
//             it('DOES NOT ALLOW units of operations', () => {
//                 const centsOfScalar: Cents<Scalar> = 3 as any
//             })
//         })
//
//         describe('operations', () => {
//             it('DOES NOT ALLOW direct conversion from one operation into another, whether directly or mediated by an explicit variable', () => {
//                 const intermediateVariableRotation: Rotation = to.Rotation(3)
//                 const scalarFromExplicitRotationVariable: Scalar = to.Scalar(intermediateVariableRotation)
//
//                 const scalarFromRotationDirectly: Scalar = to.Scalar(to.Rotation(3))
//             })
//
//             it('DOES NOT ALLOW assignment to operations from raw numbers (which is not using `to`, but why we need `to`)', () => {
//                 const rotationFromRaw: Rotation = 3
//             })
//
//             it('DOES NOT ALLOW assignment to operations by as\'ing (which is not using `to`, but why we need `to`)', () => {
//                 3 as Rotation
//             })
//
//             it('DOES NOT ALLOW assignment to raw numbers', () => {
//                 const rotationToRaw: number = to.Rotation(3)
//             })
//
//             it('DOES NOT ALLOW assignment to the wrong operation', () => {
//                 const rotationToScalar: Scalar = to.Rotation(3)
//             })
//
//             it('DOES NOT allow nesting of operations', () => {
//                 to.Rotation(to.Scalar(3))
//             })
//         })
//
//         describe('units and operations', () => {
//             it('DOES NOT ALLOW creating an operation out of a unit', () => {
//                 to.Scalar(to.Hz(3))
//             })
//
//             it('DOES NOT ALLOW assigning an operation to a unit', () => {
//                 const hzScalar: Hz = to.Scalar(3)
//             })
//
//             it('DOES NOT ALLOW assigning something with both units and type to either the wrong units or the wrong type', () => {
//                 const scalarHzAsWrongHz: Rotation<Hz> = to.Hz(to.Scalar(3))
//                 const scalarHzAsScalarWrong: Scalar<Cents> = to.Hz(to.Scalar(3))
//                 const scalarHzAsWrongWrong: Rotation<Cents> = to.Hz(to.Scalar(3))
//             })
//         })
//
//         describe('special units/operation', () => {
//             it('DOES NOT ALLOW creating fractions out of mere numbers', () => {
//                 to.Fraction([ 4, 4 ])
//             })
//
//             it('DOES NOT ALLOW making Cardinals or Ordinals if they are some other Units (not Integers)', () => {
//                 to.Cardinal(to.Hz(3))
//                 to.Numerator(to.Hz(3))
//                 to.Denominator(to.Hz(3))
//             })
//
//             it('DOES NOT ALLOW making Cardinals or Ordinals generic of some other Units', () => {
//                 const cardinalHz: Cardinal<Hz> = 3 as any as Cardinal<Hz>
//                 const numeratorHz: Numerator<Hz> = 3 as any as Numerator<Hz>
//                 const denominatorHz: Denominator<Hz> = 3 as any as Denominator<Hz>
//             })
//
//             it('DOES NOT ALLOW these oddities for Index', () => {
//                 const nestedIndexIndex: Index = to.Index(to.Index(3))
//                 const indexWrongScalar: Scalar = to.Index(3)
//             })
//         })
//     })
//
//     describe('from', () => {
//         it('DOES NOT ALLOW taking a plain number', () => {
//             from.Hz(3)
//             from.Scalar(3)
//         })
//
//         it('DOES NOT ALLOW taking the wrong units or operation', () => {
//             from.Hz(to.Ms(3))
//             from.Scalar(to.Rotation(3))
//         })
//
//         it('DOES NOT ALLOW taking the wrong type of nominal', () => {
//             from.Hz(to.Scalar(3))
//             from.Scalar(to.Hz(3))
//         })
//
//         describe('special units/operations', () => {
//             it('DOES NOT ALLOW taking plain numbers', () => {
//                 from.Cardinal(3)
//                 from.Numerator(3)
//                 from.Denominator(3)
//                 from.Index(3)
//                 from.Translation(3)
//                 from.Multiple(3)
//             })
//         })
//     })
//
//     describe('of', () => {
//         it('DOES NOT ALLOW assigning an Of to the actual thing', () => {
//             const isNotActuallyUnits: Hz = of.Hz(3)
//             const isNotActuallyOperation: Scalar = of.Scalar(3)
//         })
//
//         it('DOES NOT ALLOW assigning an Of to an Of of the wrong type', () => {
//             const ofWrongUnits: Of<Ms> = of.Hz(3)
//             const ofWrongOperation: Of<Rotation> = of.Scalar(3)
//         })
//
//         it('DOES NOT ALLOW assigning Of types that are operations of units when its wrong types', () => {
//             const wrongUnits: Of<Scalar<Hz>> = of.Scalar<Ms>(3)
//             const wrongOperation: Of<Rotation<Hz>> = of.Scalar<Hz>(3)
//         })
//
//         it('DOES NOT ALLOW assigning allows Of types that are operations of operations when its switched types', () => {
//             const nestedOf: Of<Rotation<Scalar>> = of.Scalar<Rotation>(3)
//         })
//
//         it('DOES NOT ALLOW assigning allows Of types that are operations of operations when its double type of itself to itself', () => {
//             const nestedOf: Of<Scalar> = of.Scalar<Scalar>(3)
//             const nestedOfOtherOperation: Of<Scalar> = of.Scalar<Rotation>(3)
//             const nestedOfOtherOperationFirst: Of<Scalar> = of.Rotation<Scalar>(3)
//         })
//
//         it('DOES NOT ALLOW assigning allows Of types that are operations of operations when its wrong inner type', () => {
//             const nestedOf: Of<Scalar<Rotation>> = of.Scalar<Base>(3)
//         })
//
//         it('DOES NOT ALLOW assigning allows Of types that are operations of operations when its wrong outer type', () => {
//             const nestedOf: Of<Scalar<Rotation>> = of.Base<Rotation>(3)
//         })
//
//         it('DOES NOT ALLOW creating operations of units when its wrong units', () => {
//             const scalarOfHz: Scalar<Ms> = to.Scalar(of.Hz(3))
//         })
//
//         it('DOES NOT ALLOW creating operations of operations when its wrong operation', () => {
//             const scalarOfRotation: Scalar<Rotation> = to.Scalar(of.Base(3))
//         })
//
//         it('DOES NOT ALLOW creating operations of operations of units when its wrong units', () => {
//             const scalarOfScalarOfHz: Scalar<Scalar<Hz>> = to.Scalar(of.Scalar<Ms>(3))
//         })
//
//         it('DOES NOT ALLOW creating operations of operations of units when its wrong operation', () => {
//             const scalarOfScalarOfHz: Scalar<Scalar<Hz>> = to.Scalar(of.Rotation<Hz>(3))
//         })
//
//         it('DOES NOT ALLOW assigning an Of of an operation to an Of of an operation of units or operation', () => {
//             const cantAssignAsResultOfAsingUnits: Of<Scalar<Ms>> = 3 as unknown as Of<Scalar>
//             const cantAssignAsResultOfAsingOperation: Of<Scalar<Rotation>> = 3 as unknown as Of<Scalar>
//
//             const cantAssignNonNestedToNestedUnits: Of<Scalar<Ms>> = of.Scalar<number>(3)
//             const cantAssignNonNestedToNestedOperation: Of<Scalar<Rotation>> = of.Scalar<number>(3)
//
//             const cantAssignNonNestedToNestedUnitsWithoutExplicitParameter: Of<Scalar<Ms>> = of.Scalar(3)
//             const cantAssignNonNestedToNestedOperationWithoutExplicitParameter: Of<Scalar<Rotation>> = of.Scalar(3)
//
//             const cantAssignToOperationOfOperationOfUnitsFromOperationOfOperation: Scalar<Scalar<Ms>> = to.Scalar(of.Scalar(3))
//             const cantAssignToOperationOfOperationOfOperationFromOperationOfOperation: Scalar<Scalar<Rotation>> = to.Scalar(of.Scalar(3))
//         })
//     })
//
//     describe('instead of', () => {
//         const wrongOf: Index<Translation> = insteadOf<Index, Scalar>(INITIAL)
//         const noOf: Index = insteadOf<Index, Scalar>(INITIAL)
//         const fromFullOf: Scalar<Base> = insteadOf<Scalar, Rotation>(to.Scalar(of.Translation(1)))
//     })
//
//     describe('of from', () => {
//         it(`DOES NOT ALLOW from the wrong units or operation`, () => {
//             const ofFromWrongOperation: Of<Rotation> = ofOperation(to.Translation(3))
//
//             const ofFromWrongUnits: Of<Hz> = ofUnits(to.Ms(3))
//         })
//     })
//
//     describe('custom nominals', () => {
//         type Numero = Number & { _NominalBrand: 'Numero' }
//         type Numeros = Number[] & { _NominalBrand: 'Numeros' }
//
//         let customTo: CustomTo<TestNominalInterfaceOptionObject>
//         let customFrom: CustomFrom<TestNominalInterfaceOptionObject>
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
//             customTo = nominalInterface.to
//             customFrom = nominalInterface.from
//             customOf = nominalInterface.of
//         })
//
//         describe('to', () => {
//             it('DOES NOT ALLOW the same things a normal To, for Units does not allow', () => {
//                 const numeroToRaw: number = customTo.Numero(3)
//                 const numerosToRaw: number[] = customTo.Numeros([ 3 ])
//                 const rawToNumero: Numero = 3
//                 const rawToNumeros: Numeros = [ 3 ]
//                 const numerosToNumero: Numero = customTo.Numeros([ 3 ])
//                 const numeroToNumeros: Numeros = customTo.Numero(3)
//             })
//         })
//
//         describe('of', () => {
//             it('DOES NOT ALLOW the same things a normal Of, for Units does not allow', () => {
//                 const ofNumeroToActual: Numero = customOf.Numero(3)
//                 const ofNumerosToActual: Numeros = customOf.Numeros([ 3 ])
//
//                 const actualNumeroToOf: Of<Numero> = customTo.Numero(3)
//                 const actualNumerosToOf: Of<Numeros> = customTo.Numeros([ 3 ])
//             })
//         })
//
//         describe('from', () => {
//             it('DOES NOT ALLOW the same things a normal From, for Units does not allow', () => {
//                 const numero: Numero = customFrom.Numero(customTo.Numero(3))
//                 const numeros: Numeros = customFrom.Numeros(customTo.Numeros([ 3 ]))
//             })
//         })
//     })
// })