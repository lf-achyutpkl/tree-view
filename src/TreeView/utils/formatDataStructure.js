/**
 *  This method re-structure data to flat list and set full path of each child.
 * @param treeNodes
 * @returns
 */
const formatDataStrcuture = (treeNodes) => {
  if(!Array.isArray(treeNodes) || !treeNodes.length) {
    return {
      flatList: [],
      treeWithPath: [],
    };
  }

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
        throw new Error("Incorrect data format provided");
      }
    }
  };

  formatOperation(treeNodes);

  return {
    flatList: formattedArray,
    treeWithPath: treeNodes,
  };
};

export default formatDataStrcuture;
