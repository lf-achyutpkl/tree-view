import RenderTree from "./RenderTree";
import TreeNode from "./TreeNode";

const styles = {
  nested: {
    display: "none",
  },
  active: {
    display: "block",
  },
};

function TreeItem({ 
    item,
    selectedList,
    onChangeExpandList,
    onChangeSelectList,
 }) {

  return (
      <li key={`key-${item.name}`} style={{cursor: 'pointer'}}>
        <input
          type={"checkbox"}
          checked={!!selectedList[item.id]}
          onChange={() => onChangeSelectList(item)}
        />
        <span onClick={() => onChangeExpandList(item)}>{item.name}</span>
      </li>
  );
}

export default TreeItem;
