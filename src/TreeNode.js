import TreeItem from "./TreeItem";

function TreeNode(props) {
    const {
        data,
        expandedList,
      } = props;

      console.log('rendering Tree node... with data', data);

  return (
    <ol id="mainlist" key={"mainList "} style={{ listStyle: "none" }}>
      {data.map((tree) => (
          <>
            <TreeItem item={tree} {...props} />
            {(tree.children && !!expandedList[tree.id]) && (
                <TreeNode {...props} data={tree.children}/>
            )}
          </>
      ))}
    </ol>
  );
}

export default TreeNode;
