const styles = {
  description: {
    display: "block",
    marginLeft: '20px',
    fontSize: '0.7em',
  },
  listItem: { 
    cursor: "pointer", 
    margin: "10px", 
    paddingTop: 5, 
    paddingBottom: 5, 
    width: '100%',
    userSelect: 'none',
  }
};

/**
 *  Render tree item label.
 */
function TreeItem({
  item,
  description,
  selectedList,
  onChangeExpandList,
  onChangeSelectList,
}) {
  return (
    <li key={`key-${item.id}`} style={styles.listItem}>
      <input
        data-testid={`checkbox-${item.id}`}
        type={"checkbox"}
        checked={selectedList.includes(item.id)}
        onChange={() => onChangeSelectList(item)}
      />

      <span data-testid={`treeitem-${item.id}`} onClick={() => onChangeExpandList(item)}>
        <span>{item.name}</span>
        <span style={styles.description}>{description}</span>
      </span>
    </li>
  );
}

export default TreeItem;
