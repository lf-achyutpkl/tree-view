import floorToDivisibleByFive from "./floorToDivisibleByFive";

describe("floorToDivisibleByFive", () => {
  it("should return 35 for 39 input", () => {
    const input = 39;

    const output = floorToDivisibleByFive(input);

    expect(output).toBe(35);
  });

  it("should return exact number for 5", () => {
    const input = 5;

    const output = floorToDivisibleByFive(input);

    expect(output).toBe(input);
  });

  it("should return exact number for less than 5", () => {
    const input = 3;

    const output = floorToDivisibleByFive(input);

    expect(output).toBe(input);
  });

  it("should return input value for numbers that are divisible by 5", () => {
    const input = 20;

    const output = floorToDivisibleByFive(input);

    expect(output).toBe(input);
  });

  it("should throw error for string input", () => {
    const input = "test";

    expect(() => floorToDivisibleByFive(input)).toThrow("Expects number");
  });
});
