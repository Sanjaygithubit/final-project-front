import axios from "axios";

/**
 * Axios instance

 */
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// =====================
// PRODUCTS
// =====================

// Get products (with optional category)
export const getProducts = async (category) => {
  const url =
    category && category !== "all"
      ? `/products?category=${category}`
      : "/products";

  const res = await API.get(url);
  return res.data;
};

// Get single product
export const getProductById = async (id) => {
  const res = await API.get(`/products/${id}`);
  return res.data;
};

// =====================
// AUTH
// =====================

// Register
export const registerUser = async (data) => {
  const res = await API.post("/users/register", data);
  return res.data;
};

// Login
export const loginUser = async (data) => {
  const res = await API.post("/users/login", data);
  return res.data;
};

// =====================
// ORDERS
// =====================

// Place order
export const placeOrder = async (data, token) => {
  const res = await API.post("/orders", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

// Get orders
export const getOrders = async (token) => {
  const res = await API.get("/orders", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
