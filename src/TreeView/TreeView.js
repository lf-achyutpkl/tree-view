import React, { useState, useEffect } from "react";

import TreeNode from "./TreeNode";
import SelectedItem from "./SelectedItem";

import formatDataStrcuture from "./utils/formatDataStructure";

function TreeView({ data }) {
  const [treeData, setTreeData] = useState(data);

  // Actually I wanted to convert data structure in Flatlist and work from it to avoid nested loop.
  // All the operations are done through flatlist however, rendering is still done using nested loop, which can be improved.
  const [flatList, setFlatList] = useState([]);
  const [expandedList, setExpandedList] = useState([]);
  const [selectedList, setSelectedList] = useState([]);

  useEffect(() => {
    const { treeWithPath, flatList } = formatDataStrcuture(data);
    setTreeData(treeWithPath);
    setFlatList(flatList);
  }, [data]);

  /**
   *  Handle expand press
   */
  const handleExpand = (item) => {
    if (expandedList.includes(item.id)) {
      const filteredList = expandedList.filter((elem) => elem !== item.id);
      setExpandedList(filteredList);
      return;
    }

    setExpandedList([...expandedList, item.id]);
  };

  /**
   *  Handle item select. Check if parent is selected then all of its child should be selected.
   *  And when child is unselected then uncheck parent as well.
   */
  const handleSelect = (node) => {
    let selected = [...selectedList];

    const isSelected = !selected.includes(node.id);

    isSelected
      ? !selected.includes(node.id) && selected.push(node.id)
      : (selected = selected.filter((elem) => elem !== node.id));

    if (node.children) {
      const CheckOrUncheckAllChildren = (nodes) => {
        for (const node of nodes) {
          isSelected
            ? !selected.includes(node.id) && selected.push(node.id)
            : (selected = selected.filter((elem) => elem !== node.id));

          if (node.children) {
            CheckOrUncheckAllChildren(node.children);
          }
        }
      };
      CheckOrUncheckAllChildren(node.children);
    }

    // This is run when a node is checked
    // If all of the children are checked, also check parent(s)

    if (isSelected) {
      const { fullPath } = node;
      const parents = fullPath.split("/").slice(1, -1).reverse();

      for (const parent of parents) {
        let parentsChildren = flatList.filter((node) =>
          node.fullPath.includes(parent)
        );

        // Remove first element because its the parent
        parentsChildren.shift();

        const parentsAllChildrenChecked = parentsChildren.every((child) =>
          selected.includes(child.id)
        );

        if (parentsAllChildrenChecked && !selected.includes(parent)) {
          !selected.includes(parent.id) && selected.push(parent);
        }
      }
    }

    if (!isSelected) {
      const { fullPath } = node;
      const parents = fullPath.split("/").slice(1, -1);
      for (const parent of parents) {
        selected = selected.filter((elem) => elem !== parent);
      }
    }

    setSelectedList([...selected]);
  };
  return (
    <>
      <TreeNode
        data={treeData}
        flatList={flatList}
        expandedList={expandedList}
        selectedList={selectedList}
        onChangeExpandList={handleExpand}
        onChangeSelectList={handleSelect}
      />

      {!!selectedList.length && (
        <SelectedItem selectedList={selectedList} flatList={flatList} />
      )}
    </>
  );
}

export default TreeView;
