import React from "react";

const styles = {
  header: {
    padingLeft: "16px",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  selectedBlock: {
    backgroundColor: "lightcoral",
    padding: "10px",
    borderRadius: "10px",
    margin: "10px",
  },
};

/**
 *  Component to render selected item
 */
const SelectedItem = ({ flatList, selectedList }) => {
  const items = selectedList.map((selected) => {
    const selectedItem = flatList.find((data) => {
      return data.id === selected && data.type === "variant";
    });

    return selectedItem ? (
      <span key={selectedItem.id} style={styles.selectedBlock}>
        {selectedItem.name} - {selectedItem.productSize} devices
      </span>
    ) : (
      ""
    );
  });

  

  return (
    <>
      <h2 style={styles.header}>Selected Variant</h2>
      <div style={styles.container}>{items}</div>
    </>
  );
};

export default React.memo(SelectedItem);
