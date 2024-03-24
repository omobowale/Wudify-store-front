import React from "react";
import Layout from "../../commons/Layout";
import {
  fetchCategoryBySlug,
  fetchSubCategories,
} from "../../helpers/products";
import {
  product_categories,
  product_sub_categories,
} from "../../mock_data/product_categories";
import CategoryHero from "./CategoryHero";
import ContentBodySection from "./ContentBodySection";
import SubCategorySection from "./SubCategorySection";
import { useParams } from "react-router-dom";

function Category() {
  const params = useParams();
  const { slug } = params;
  const category = fetchCategoryBySlug(product_categories, slug);

  return (
    <Layout>
      <div>
        <CategoryHero name={category?.name} />
        <SubCategorySection
          subcategories={fetchSubCategories(
            product_sub_categories,
            category.id
          )}
        />
        <ContentBodySection id={category?.id} />
      </div>
    </Layout>
  );
}

export default Category;
