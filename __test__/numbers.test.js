import { numbers } from "../numbers.js";

describe('comparar numeros', () => {
    test('Mayor que',() =>{
        expect(numbers (2,2)).toBeGreaterThan(3);
    })
})