import TreeItem from "./TreeItem";
import floorToDivisibleByFive from "./utils/floorToDivisibleByFive";

const styles = {
  container: {
    width: "max-content",
    backgroundColor: "lightblue",
    borderRadius: "10px",
    paddingRight: "20px",
  },
};

/**
 * Component that renders main node
 */
function TreeNode(props) {
  const { data, expandedList, flatList } = props;

  const getDescription = (item) => {
    const list = flatList.filter(
      (el) => el.fullPath.includes(item.id) && el.type === "variant"
    );

    if (list.length === 0) {
      return "";
    }

    if (list.length >= 2) {
      return `${floorToDivisibleByFive(list[0].productSize)} ${
        list[0].name
      }, ${floorToDivisibleByFive(list[1].productSize)} ${
        list[1].name
      } and more`;
    }
    return `${floorToDivisibleByFive(list[0].productSize)} ${list[0].name}`;
  };

  return (
    <div style={styles.container}>
      <ol id="mainlist" key={"mainList "} style={{ listStyle: "none" }}>
        {data.map((item) => {
          // Getting inside loop because, in real senario we will fetch the product size from product list and display it.
          const description =
            (!expandedList[item.id] || item.type === "variant") &&
            getDescription(item);

          return (
            <div key={item.id}>
              <TreeItem
                key={`treeitem-${item.id}`}
                item={item}
                description={description}
                {...props}
              />

              {item.children && expandedList.includes(item.id) && (
                <TreeNode
                  key={`node-${item.id}`}
                  {...props}
                  data={item.children}
                />
              )}
            </div>
          );
        })}
      </ol>
    </div>
  );
}

export default TreeNode;
