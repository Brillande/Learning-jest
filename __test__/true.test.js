import { isNull, isTrue } from "../true.js";
import {isFalse, isUndefined } from "../true.js";
describe('resultado nulo',() =>{
    test ('null',() =>{
        expect(isNull()).toBeNull();
    });
});
describe('resultado vedadero',() =>{
    test ('verdadero',() =>{
        expect(isTrue()).toBeTruthy();
    });
});
describe('resultado falso',() =>{
    test ('falsos',() =>{
        expect(isFalse()).toBeFalsy();
    });
});
describe('resultado undefined',() =>{
    test ('undefined',() =>{
        expect(isUndefined()).toBeUndefined();
    });
});