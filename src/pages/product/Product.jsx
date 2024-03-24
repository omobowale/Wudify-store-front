import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../commons/Layout";
import PageBreadCrumb from "../../commons/PageBreadCrumb";
import {
  fetchCategoryById,
  fetchCategoryBySlug,
  fetchProductBySlug,
  fetchProductCategoryFromSubCategoryId,
  fetchSubCategories,
} from "../../helpers/products";
import {
  products,
  product_categories,
  product_sub_categories,
} from "../../mock_data/product_categories";
import ProductDetailsSection from "./ProductDetailsSection";

function Product() {
  const params = useParams();
  const { slug } = params;

  const product = fetchProductBySlug(products, slug);
  const subcategory = fetchProductCategoryFromSubCategoryId(product_sub_categories, product?.prod_sub_cat);
  const category = fetchCategoryById(product_categories, subcategory?.prod_category);

  return (
    <Layout>
      <div className="w-[85%] mx-auto mt-8">
        <PageBreadCrumb
          mainText={"Home"}
          subText={category?.name}
          otherText={product?.name}
          isActiveIndex={2}
        />
      </div>
      <div className="w-[85%] mx-auto mt-8">
        <ProductDetailsSection product={product} />
      </div>
      <div className="w-[85%] mx-auto mt-8"></div>
    </Layout>
  );
}

export default Product;
