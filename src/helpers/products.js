export const fetchSubCategories = (subcategories, category_id) => {
    return subcategories?.filter(s => s.prod_category == category_id);
}

export const fetchSubCategoriesBySlug = (subcategories, slug) => {
    return subcategories?.filter(s => s.prod_slug == slug);
}

export const fetchCategoryBySlug = (categories, slug) => {
    return categories?.find(category => category.slug?.toLowerCase() === slug?.toLowerCase())

}
export const fetchCategoryById = (categories, id) => {
    return categories?.find(category => category.id?.toString().toLowerCase() === id?.toString().toLowerCase())

}

export const fetchProductBySlug = (products, slug) => {
    return products?.find(product => product.slug?.toLowerCase() === slug?.toLowerCase())

}

export const fetchProductCategoryFromSubCategoryId = (subcategories, subcategoryId) => {
    return subcategories?.find(subcategory => subcategory.id === subcategoryId)
}
