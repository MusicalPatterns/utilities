// tslint:disable no-any no-unused-expression comment-format no-commented-code no-dead-store

// import {
//     Cardinal,
//     Cents,
//     Denominator,
//     Hz,
//     Index,
//     Ms,
//     Numerator,
//     Rotation,
//     Scalar,
//     to,
// } from '../../../src/indexForTest'
//
// describe('to', () => {
//     describe('units', () => {
//         it('DOES NOT ALLOW assignment to units from raw numbers (which is not using `to`, but why we need `to`)', () => {
//             const hzFromRaw: Hz = 3
//         })
//
//         it('DOES NOT ALLOW assignment to units by as\'ing (which is not using `to`, but why we need `to`)', () => {
//             3 as Hz
//         })
//
//         it('DOES NOT ALLOW assignment to raw numbers', () => {
//             const hzToRaw: number = to.Hz(3)
//         })
//
//         it('DOES NOT ALLOW assignment to the wrong unit', () => {
//             const hzToMs: Ms = to.Hz(3)
//         })
//
//         it('DOES NOT ALLOW re-assignment to the same unit', () => {
//             to.Hz(to.Hz(3))
//         })
//
//         it('DOES NOT ALLOW direct conversion from one unit into another, whether directly or intermediated by an explicit varible', () => {
//             const intermediaryVariableMs: Ms = to.Ms(3)
//             const centsFromExplicitMsVariable: Cents = to.Cents(intermediaryVariableMs)
//
//             const centsFromToMsDirectly: Cents = to.Cents(to.Ms(3))
//         })
//
//         it('DOES NOT ALLOW unholy hybrids of units', () => {
//             const centsMsFromMs: Cents<Ms> = 3 as any
//             const msCentsFromMs: Ms<Cents> = 3 as any
//         })
//     })
//
//     describe('operations', () => {
//         it('DOES NOT ALLOW assignment to an operation when its actually an operation of that operation', () => {
//             const failedNestedRotation: Rotation = to.Rotation(to.Rotation(3))
//             const failedRotationOfScalarRotation: Rotation = to.Rotation(to.Scalar(3))
//             const failedRotationOfScalarScalar: Scalar = to.Rotation(to.Scalar(3))
//         })
//
//         it('DOES NOT ALLOW assigning to an operation of an operation that is inverted from how it should be', () => {
//             const failedRotationOfScalarRotation: Scalar<Rotation> = to.Rotation(to.Scalar(3))
//         })
//
//         it('DOES NOT ALLOW direct conversion from one operation into another, whether directly or intermediated by an explicit varible', () => {
//             const intermediateVariableRotation: Rotation = to.Rotation(3)
//             const scalarFromExplicitRotationVariable: Scalar = to.Scalar(intermediateVariableRotation)
//
//             const scalarFromRotationDirectly: Scalar = to.Scalar(to.Rotation(3))
//         })
//
//         it('DOES NOT ALLOW assignment to operations from raw numbers (which is not using `to`, but why we need `to`)', () => {
//             const rotationFromRaw: Rotation = 3
//         })
//
//         it('DOES NOT ALLOW assignment to operations by as\'ing (which is not using `to`, but why we need `to`)', () => {
//             3 as Rotation
//         })
//
//         it('DOES NOT ALLOW assignment to raw numbers', () => {
//             const rotationToRaw: number = to.Rotation(3)
//         })
//
//         it('DOES NOT ALLOW assignment to the wrong operation', () => {
//             const rotationToScalar: Scalar = to.Rotation(3)
//         })
//     })
//
//     describe('units and operations', () => {
//         it('DOES NOT ALLOW assigning something with both units and operation to something with only one or the other', () => {
//             const scalarHzAsJustScalar: Scalar = to.Scalar(to.Hz(3))
//             const scalarHzAsJustHz: Hz = to.Scalar(to.Hz(3))
//             const scalarHzAsJustScalarDirect: Scalar = 3 as any as Scalar<Hz>
//             const scalarHzAsJustHzDirect: Hz = 3 as any as Scalar<Hz>
//         })
//
//         it('DOES NOT ALLOW assigning something with both units and type to either the wrong units or the wrong type', () => {
//             const scalarHzAsWrongHz: Rotation<Hz> = to.Hz(to.Scalar(3))
//             const scalarHzAsScalarWrong: Scalar<Cents> = to.Hz(to.Scalar(3))
//             const scalarHzAsWrongWrong: Rotation<Cents> = to.Hz(to.Scalar(3))
//         })
//     })
//
//     describe('special units/operation', () => {
//         it('DOES NOT ALLOW creating fractions out of mere numbers', () => {
//             to.Fraction([ 4, 4 ])
//         })
//
//         it('DOES NOT ALLOW making Cardinals or Ordinals if they are some other Units (not Integers)', () => {
//             to.Cardinal(to.Hz(3))
//             to.Numerator(to.Hz(3))
//             to.Denominator(to.Hz(3))
//         })
//
//         it('DOES NOT ALLOW making Cardinals or Ordinals generic of some other Units (besides Integers)', () => {
//             const cardinalHz: Cardinal<Hz> = 3 as any as Cardinal<Hz>
//             const numeratorHz: Numerator<Hz> = 3 as any as Numerator<Hz>
//             const denominatorHz: Denominator<Hz> = 3 as any as Denominator<Hz>
//         })
//
//         it('DOES NOT ALLOW these oddities for Index', () => {
//             const nestedIndexIndex: Index = to.Index(to.Index(3))
//             const indexIndexScalar: Index<Scalar> = to.Index(3)
//             const indexWrongScalar: Scalar = to.Index(3)
//         })
//     })
// })
