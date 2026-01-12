// This file will contain API service calls in the future
// For now, we're using static data from types.js

/**
 * Example: Fetch all products from API
 * @returns {Promise<Array>} Array of products
 */
export async function fetchProducts() {
  // TODO: Replace with actual API call
  // const response = await fetch('/api/products');
  // return response.json();
  
  // Currently using static data from types.js
  const { products } = await import('../types/types');
  return products;
}

/**
 * Example: Fetch products by category
 * @param {string} category - Category to filter by (relojes, perfumes)
 * @returns {Promise<Array>} Filtered array of products
 */
export async function fetchProductsByCategory(category) {
  // TODO: Replace with actual API call
  // const response = await fetch(`/api/products?category=${category}`);
  // return response.json();
  
  const { products } = await import('../types/types');
  return products.filter(p => p.category === category);
}

/**
 * Example: Fetch single product by ID
 * @param {number} id - Product ID
 * @returns {Promise<Object>} Product object
 */
export async function fetchProductById(id) {
  // TODO: Replace with actual API call
  // const response = await fetch(`/api/products/${id}`);
  // return response.json();
  
  const { products } = await import('../types/types');
  return products.find(p => p.id === id);
}
