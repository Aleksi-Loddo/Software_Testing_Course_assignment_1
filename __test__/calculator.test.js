import  {divide} from '../src/calculator.js'

describe('divide', () => {
   it('divide 2 by 1', () => {
        expect(divide(2,1)).toBe(2)
    });

    it('cannot divide by 0',() => {
        expect(() => {divide(2,0)}).toThrow('Division by zero is not allowed');
    });

    it('both inputs have to be a number', () => {
        expect(() => {divide ('2',2)}).toThrow('Both arguments must be  numbers');
    });

    it('there is a missing argument', () =>{
        expect(() => {divide(2)}).toThrow('Both arguments must be  numbers');
    });
    
    it('argument is Not a Number', () => {
        expect(() => {divide(NaN,2)}).toThrow('Arguments cannot be NaN')
    })
});