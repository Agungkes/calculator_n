import operator from "./operator";

describe('operator used corresponds to the given input', () => {
    test('plus operator', () => {
        const minusOperator = operator['plus']
        expect(minusOperator(5, 1)).toBe(6);
    });
    test('minus operator', () => {
        const minusOperator = operator['minus']
        expect(minusOperator(5, 1)).toBe(4);
    });
    test('multiply operator', () => {
        const minusOperator = operator['multiply']
        expect(minusOperator(5, 1)).toBe(5);
    });
    test('divide operator', () => {
        const minusOperator = operator['divide']
        expect(minusOperator(5, 1)).toBe(5);
    });
});