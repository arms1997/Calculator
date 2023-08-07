import { calculateNumber } from "./calculateNumber";

describe(calculateNumber.name, () => {
  it("should correctly calculate addition", () => {
    const result = calculateNumber(["2", "+", "3"]);
    expect(result).toBe("5");
  });

  it("should correctly calculate subtraction", () => {
    const result = calculateNumber(["10", "-", "5"]);
    expect(result).toBe("5");
  });

  it("should correctly calculate multiplication", () => {
    const result = calculateNumber(["4", "*", "6"]);
    expect(result).toBe("24");
  });

  it("should correctly calculate division", () => {
    const result = calculateNumber(["20", "/", "4"]);
    expect(result).toBe("5");
  });

  it("should handle parentheses", () => {
    const result = calculateNumber(["(", "2", "+", "3", ")", "*", "4"]);
    expect(result).toBe("20");
  });

  it("should handle complex expressions", () => {
    const result = calculateNumber(["2", "+", "3", "*", "4", "/", "2"]);
    expect(result).toBe("8");
  });

  it("should handle decimal values", () => {
    const result = calculateNumber(["3.5", "*", "2"]);
    expect(result).toBe("7");
  });

  it("should handle negative numbers", () => {
    const result = calculateNumber(["-5", "+", "3"]);
    expect(result).toBe("-2");
  });

  it("should handle invalid characters", () => {
    const result = calculateNumber(["4", "*", "x", "@", "2"]);
    expect(result).toBe("8");
  });
});
