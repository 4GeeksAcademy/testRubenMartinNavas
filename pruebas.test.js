const { fromEuroToDollar, fromDollarToYen, fromYenToPound, } = require('./app.js');



test("One euro should be 1.07 dollars", function () {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745);
});


test("3.5 Dollar should be 511.91 Yen", function () {
    expect(fromDollarToYen(3.5)).toBeCloseTo(511.9158);
});


test("3.5 Yen should be  Pound 0.01945", function () {
    expect(fromYenToPound(3.5)).toBeCloseTo(0.01945);
});

