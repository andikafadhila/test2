const countLetter = require("../src/index");

test("Count Letter on a String", () => {
  expect(countLetter("aaabbccaca")).toStrictEqual({ a: 5, b: 2, c: 3 });
});

test("Count Letter on a String", () => {
  expect(countLetter("xxccyesfu")).toStrictEqual({
    x: 2,
    c: 2,
    y: 1,
    e: 1,
    s: 1,
    f: 1,
    u: 1,
  });
});
