const { fromEuroToDollar, fromDollarToYen, fromYenToPound, } = require('./app.js');



test("One euro should be 1.07 dollars", function () {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745);
});


test("One Dollar should be 146.26 Yen", function () {
    const Yen = fromDollarToYen(3.5);
    const expected = 3.5 * 146.2;
    expect(fromDollarToYen(3.5)).toBeCloseTo(511.9099);
});


test("One Yen should be 0.0055 Pound", function () {
    const Pound = fromYenToPound(3.5);
    const expected = 3.5 * 0.0055;
    expect(fromYenToPound(3.5)).toBe(0.01925);
});

