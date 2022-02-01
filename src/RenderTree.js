import React, {useState, useEffect} from 'react';

import TreeItem from "./TreeItem";
import TreeNode from './TreeNode';


function RenderTree({ data }) {
    const [treeData, setTreeData] = useState(data);
    const [expandedList, setExpandedList] = useState([]);
    const [selectedList, setSelectedList] = useState([]);

    const handleExpand = (item) => {
        if(expandedList[item.id]) {
            const expandedObjects = {...expandedList};
            delete expandedObjects[item.id];
            setExpandedList(expandedObjects);
            return;
        }

        setExpandedList({...expandedList, [item.id]: item});
    }

    const handleSelect = (item) => {
        if(selectedList[item.id]) {
            const selectedObjects = {...selectedList};
            delete selectedObjects[item.id];
            setSelectedList(selectedObjects);
            return;
        }

        setSelectedList({...selectedList, [item.id]: item});
    }

  return (
    <TreeNode
        data={data} 
        expandedList={expandedList}
        selectedList={selectedList}
        onChangeExpandList={handleExpand}
        onChangeSelectList={handleSelect}
    />)
}



export default RenderTree;
