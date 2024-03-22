export const fetchSubCategories = (subcategories, category_id) => {
    return subcategories.filter(s => s.prod_category == category_id);
}