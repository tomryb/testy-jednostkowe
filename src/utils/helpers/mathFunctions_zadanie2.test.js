import { add, sub } from "./mathFunctions_zadanie2";

describe("mathFunctions_zadanie2.js", () => {
  describe("method add()", () => {
    it("should correct add two numbers", () => {
      const result = add(5, 5);
      const expectedResult = 10;

      expect(result).toBe(expectedResult);
    });
    it("should return number for single param", () => {
      const result = add(5);
      const expectedResult = 5;

      expect(result).toBe(expectedResult);
    });
    it("should return string for first not a number", () => {
      const result = add('5', 5);
      const expectedResult = "Niepoprawny parametr";

      expect(result).toBe(expectedResult);
    });
    it("should return string for second not a number", () => {
      const result = add(5, '5');
      const expectedResult = "Niepoprawny parametr";

      expect(result).toBe(expectedResult);
    });
    it("should return string for none numbers", () => {
      const result = add();
      const expectedResult = "Niepoprawny parametr";

      expect(result).toBe(expectedResult);
    });
  });

  //ta sama zasada co wyżej do sub
  describe("method sub()", () => {
    it("should correct sub two numbers", () => {
      const result = sub(5, 5);
      const expectedResult = 0;

      expect(result).toBe(expectedResult);
    });
    it("should return number for single param", () => {
      const result = sub(5);
      const expectedResult = 5;

      expect(result).toBe(expectedResult);
    });
  });
});
