import{ sumar, multiplicar, restar, dividir } from '../maths.js';

describe('calculos matematicos', ()=> {
    test('prueba de sumas', ()=>{
        expect(sumar(1,1)).toBe(2);
    });
    test('prueba de multiplicar', ()=>{
        expect(multiplicar(1,1)).toBe(1);
    });
    test('prueba de restar', ()=>{
        expect(restar(1,1)).toBe(0);
    });
    test('prueba de dividir', ()=>{
        expect(dividir(10,2)).toBe(5);
    });
});