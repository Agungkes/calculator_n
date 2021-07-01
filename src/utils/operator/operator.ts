const operator = {
    'plus': (a: number, b: number) => a + b,
    'minus': (a: number, b: number) => a - b,
    'multiply': (a: number, b: number) => a * b,
    'divide': (a: number, b: number) => a / b,
}
export type OperationType = keyof typeof operator
export default operator