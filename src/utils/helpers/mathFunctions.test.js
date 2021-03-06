import { add, sub } from "./mathFunctions";

describe("mathFunctions.js", () => {
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
  });
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
