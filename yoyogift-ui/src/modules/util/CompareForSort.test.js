import {
  comparePointsAsc,
  comparePointsDesc,
  compareCountAsc,
  compareCountDesc,
  compareValidityAsc,
  compareValidityDesc
} from "./CompareForSort";

let a, b;
a = {
  cardPoints: 5,
  cardCount: 10,
  cardExpiryDate: "2/18/2020"
};
b = {
  cardPoints: 6,
  cardCount: 20,
  cardExpiryDate: "2/12/2020"
};
it("return sorted value Asc", () => {
  expect(comparePointsAsc(a, b)).toEqual(-1);
});
it("return unsorted value Asc", () => {
  expect(comparePointsAsc(b, a)).toEqual(1);
});
it("return equal value Asc", () => {
  expect(comparePointsAsc(5, 5)).toEqual(0);
});

it("return sorted value Asc", () => {
  expect(comparePointsDesc(a, b)).toEqual(1);
});
it("return unsorted value Asc", () => {
  expect(comparePointsDesc(b, a)).toEqual(-1);
});
it("return equal value Asc", () => {
  expect(comparePointsDesc(5, 5)).toEqual(0);
});

it("return sorted value Asc", () => {
  expect(compareCountAsc(a, b)).toEqual(-1);
});
it("return unsorted value Asc", () => {
  expect(compareCountAsc(b, a)).toEqual(1);
});
it("return equal value Asc", () => {
  expect(compareCountAsc(10, 10)).toEqual(0);
});

it("return equal value Asc", () => {
  expect(compareCountDesc(a, b)).toEqual(1);
});
it("return equal value Asc", () => {
  expect(compareCountDesc(b, a)).toEqual(-1);
});
it("return equal value Asc", () => {
  expect(compareCountDesc(25, 25)).toEqual(0);
});

//compareValidityAsc
it("return equal value Asc", () => {
  expect(compareValidityAsc(a, b)).toEqual(1);
});
it("return equal value Asc", () => {
  expect(compareValidityAsc(b, a)).toEqual(-1);
});
it("return equal value Asc", () => {
  expect(compareValidityAsc("2/18/2020", "2/18/2020")).toEqual(0);
});

//compareValidityDesc
it("return equal value Asc", () => {
  expect(compareValidityDesc(a, b)).toEqual(-1);
});
it("return equal value Asc", () => {
  expect(compareValidityDesc(b, a)).toEqual(1);
});
it("return equal value Asc", () => {
  expect(compareValidityDesc("2/18/2020", "2/18/2020")).toEqual(0);
});
