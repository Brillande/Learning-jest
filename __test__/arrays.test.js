import { arrayFrutas, arrayColores} from '../arrays';

describe('comprobaremos que existe un elemento', () => {
    test('¿tiene una sandia?', () => {
        expect(arrayFrutas()).toContain('sandia');
    });
    test('no contiene una pera', () => {
        expect(arrayFrutas()).not.toContain('pera')
    })
    test('comprobar tamaño array',() => {
        expect(arrayFrutas()).toHaveLength(4)
    })
    test('¿tiene el color azul?', () => {
        expect(arrayColores()).toContain('azul')
    })
});