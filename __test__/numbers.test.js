import { numbers } from "../numbers.js";

describe('comparar numeros', () => {
    test('Mayor que',() =>{
        expect(numbers (2,2)).toBeGreaterThan(3);
    });
    test('igual o mayor que',() =>{
        expect(numbers (2,2)).toBeGreaterThanOrEqual(4);
    });
    test('menor que',() =>{
        expect(numbers (2,2)).toBeLessThan(5);
    });
    test('igual o menor que',() =>{
        expect(numbers (2,2)).toBeLessThanOrEqual(50);
    });
    test('numeros flotantes',() =>{
        expect(numbers (0.2,0.2)).toBeCloseTo(0.4);
    });
})