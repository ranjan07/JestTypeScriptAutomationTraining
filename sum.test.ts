import { sum, shopping_cart, login, fetchData, calculator } from './sum';

test('test add function', () => {
    // expect = 3, actual = 3
    expect(sum(1, 2)).toBe(3);
});

describe('E-Commerce', () => {
    it('PS5 in shopping cart', (() => {
        expect(shopping_cart()).toContain('PS5');
    }))

    it('Login', (() => {
        const mockLoginCall = jest.fn();
        login(mockLoginCall);
        expect(mockLoginCall).toHaveBeenCalled();

        //called with correct arguments
        expect(mockLoginCall).toHaveBeenCalledWith('Login success');
    }))
})

describe('callbacks', () => {
    it('callback is called after the async operation', done => {
        const mockCallBack = jest.fn(data => {
            expect(data).toBe('Data fetched');
            done();
        })
        fetchData(mockCallBack);
        expect(mockCallBack).not.toHaveBeenCalled();
    })

    it('spy on calculator', (() => {
        const spyAdd = jest.spyOn(calculator, 'add');
        const result = calculator.add(2, 3);
        expect(spyAdd).toHaveBeenCalled();
        expect(spyAdd).toHaveBeenCalledWith(2, 3);
        expect(result).toBe(5);
        spyAdd.mockRestore(); //restore original implementation
    }))
})