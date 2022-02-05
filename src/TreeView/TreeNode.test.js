import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import TreeView from "./TreeView";
import { productCategories } from "../data/productCategories";

describe("TreeView", () => {
  test("renders TreeView component", () => {
    render(<TreeView data={productCategories} />);

    expect(screen.getByText("Mobile Phone")).toBeVisible();
  });

  describe("testing select action", () => {
    test("renders checkbox", () => {
      const mobilePhoneId = "fb2f8510-62cd-47d5-80f8-c3a09c3aa247";

      render(<TreeView data={productCategories} />);

      const mobilePhoneCheckbox = screen.getByTestId(
        `checkbox-${mobilePhoneId}`
      );
      expect(mobilePhoneCheckbox).toBeVisible();
      expect(mobilePhoneCheckbox).not.toBeChecked();
    });

    test("should render Selected Variant title on selecting parent checkbox", () => {
      const mobilePhoneId = "fb2f8510-62cd-47d5-80f8-c3a09c3aa247";

      render(<TreeView data={productCategories} />);

      const mobilePhoneCheckbox = screen.getByTestId(
        `checkbox-${mobilePhoneId}`
      );
      fireEvent.click(mobilePhoneCheckbox);

      expect(mobilePhoneCheckbox).toBeChecked();
      expect(screen.getByText("Selected Variant")).toBeVisible();
    });

    test("should check all children checkbox on selecting parent checkbox", () => {
      const parentMobilePhoneId = "fb2f8510-62cd-47d5-80f8-c3a09c3aa247";
      const childAppleId = "016f8ad9-e278-4ad4-925a-5689e93b0efc";
      const childNokiaId = "29a5bfdc-eadb-4a8a-9b08-6d4d45fb3718";
      const childSamsungId = "21a5bfdc-eadb-4a8a-9b08-6d4r45fb3718";

      render(<TreeView data={productCategories} />);

      const mobilePhoneCheckbox = screen.getByTestId(
        `checkbox-${parentMobilePhoneId}`
      );
      fireEvent.click(screen.getByTestId(`treeitem-${parentMobilePhoneId}`)); // First expanding the list
      fireEvent.click(mobilePhoneCheckbox);

      expect(screen.getByTestId(`checkbox-${childAppleId}`)).toBeVisible();

      expect(screen.getByTestId(`checkbox-${childAppleId}`)).toBeChecked();
      expect(screen.getByTestId(`checkbox-${childNokiaId}`)).toBeChecked();
      expect(screen.getByTestId(`checkbox-${childSamsungId}`)).toBeChecked();
    });

    test("should check parent checkbox on selecting all children checkbox", () => {
      const parentMobilePhoneId = "fb2f8510-62cd-47d5-80f8-c3a09c3aa247";
      const childAppleId = "016f8ad9-e278-4ad4-925a-5689e93b0efc";
      const childNokiaId = "29a5bfdc-eadb-4a8a-9b08-6d4d45fb3718";
      const childSamsungId = "21a5bfdc-eadb-4a8a-9b08-6d4r45fb3718";

      render(<TreeView data={productCategories} />);

      fireEvent.click(screen.getByTestId(`treeitem-${parentMobilePhoneId}`)); // First expanding the list
      fireEvent.click(screen.getByTestId(`checkbox-${childAppleId}`));
      fireEvent.click(screen.getByTestId(`checkbox-${childNokiaId}`));
      fireEvent.click(screen.getByTestId(`checkbox-${childSamsungId}`));

      expect(
        screen.getByTestId(`checkbox-${parentMobilePhoneId}`)
      ).toBeChecked();
    });
  });

  describe("testing expand action", () => {
    test("should expand all child clicking on parent", () => {
      const parentMobilePhoneId = "fb2f8510-62cd-47d5-80f8-c3a09c3aa247";
      const childAppleId = "016f8ad9-e278-4ad4-925a-5689e93b0efc";
      const childNokiaId = "29a5bfdc-eadb-4a8a-9b08-6d4d45fb3718";
      const childSamsungId = "21a5bfdc-eadb-4a8a-9b08-6d4r45fb3718";

      render(<TreeView data={productCategories} />);

      fireEvent.click(screen.getByTestId(`treeitem-${parentMobilePhoneId}`));

      expect(screen.getByTestId(`treeitem-${childAppleId}`)).toBeVisible();
      expect(screen.getByTestId(`treeitem-${childNokiaId}`)).toBeVisible();
      expect(screen.getByTestId(`treeitem-${childSamsungId}`)).toBeVisible();
    });
  });
});
