import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import "./categories-preview.style.scss";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categoriesMap).map((key) => {
        const products = categoriesMap[key];
        return <CategoryPreview key={key} title={key} products={products} />;
      })}
    </>
  );
};

export default CategoriesPreview;
