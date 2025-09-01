const { fromEuroToDollar, fromDollarToYen, fromYenToPound, } = require('./app.js');



test("3.5 euros should be 3.745 dollars", function () {
    expect(fromEuroToDollar(3.5)).toBe(3.745);
});


test("3.5 Dollars should be 511.91 Yen", function () {
    expect(fromDollarToYen(3.5)).toBeCloseTo(511.9158);
});


test("3.5 Yens should be  Pound 0.01945", function () {
    expect(fromYenToPound(3.5)).toBeCloseTo(0.01945);
});

