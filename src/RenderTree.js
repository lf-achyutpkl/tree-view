import React, { useState, useEffect } from "react";
import SelectedItem from "./SelectedItem";

import TreeNode from "./TreeNode";

function RenderTree({ data }) {
  const [treeData, setTreeData] = useState(data);
  
  // Actually I wanted to convert data structure in Flatlist and work from it to avoid nested loop.
  // All the operations are done through flatlist however, rendering is still done using nested loop, which can be improved.
  const [flatList, setFlatList] = useState([]);
  const [expandedList, setExpandedList] = useState([]);
  const [selectedList, setSelectedList] = useState([]);

  useEffect(() => {
    const treeWithPath = formatDataStrcuture(data);
    setTreeData(treeWithPath);
  }, [data]);

  /**
   *  This method re-structure data to flat list and set full path of each child.
   * @param nodes
   * @returns
   */
  const formatDataStrcuture = (nodes) => {
    const formattedArray = [];
    const formatOperation = (nodes, parentsPath = null) => {
      for (const node of nodes) {
        if (node.id && node.name) {
          const fullPath = parentsPath
            ? `${parentsPath}/${node.id}`
            : `/${node.id}`;

          node["fullPath"] = fullPath;

          formattedArray.push({ ...node });

          // If the node has children, run this function again aganist the children until no more childrens occure
          if (node.children) {
            formatOperation(node.children, fullPath);
          }
        } else {
          console.error("Error, incorrect data format provided");
        }
      }
    };

    formatOperation(nodes);
    setFlatList(formattedArray);
    return nodes;
  };

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
          selectedList.includes(child.id)
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

export default RenderTree;
