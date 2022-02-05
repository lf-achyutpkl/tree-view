import formatDataStrcuture from "./formatDataStructure";

import { flatListMockData } from "../../data/mockdata/flatListMockData";
import { productCategories } from "../../data/productCategories";
import { treeWithFullPathMockData } from "../../data/mockdata/treeWithFullPathMockData";

describe("formatDataStrcuture", () => {
  it("should return flatList and tree with full path", () => {
    const { flatList, treeWithPath } = formatDataStrcuture(productCategories);

    expect(flatList).toEqual(flatListMockData);
    expect(treeWithPath).toEqual(treeWithFullPathMockData);
  });

  it("should throw error for invalid data format provided", () => {
    const invalidInput = [{ id: "123" }];

    expect(() => formatDataStrcuture(invalidInput)).toThrow(
      "Incorrect data format provided"
    );
  });

  it("should return empty array for empty array input", () => {
    const input = [];
    const expectedOutput = {
      flatList: [],
      treeWithPath: [],
    };

    const output = formatDataStrcuture(input);

    expect(output).toEqual(expectedOutput);
  });

  it("should return empty array for non array type input", () => {
    const input = {};
    const expectedOutput = {
      flatList: [],
      treeWithPath: [],
    };

    const output = formatDataStrcuture(input);

    expect(output).toEqual(expectedOutput);
  });

  it("should have two item in flat list", () => {
    const input = [
      { id: "123", name: "parent", children: [{ id: "456", name: "Child" }] },
    ];

    const output = formatDataStrcuture(input);

    expect(output.flatList.length).not.toBe(1);
    expect(output.flatList.length).toBe(2);
  });
});
