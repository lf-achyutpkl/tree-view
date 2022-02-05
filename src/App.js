import TreeView from "./TreeView/TreeView";
import { productCategories } from "./data/productCategories";

function App() {
  return <TreeView data={productCategories} />;
}

export default App;
