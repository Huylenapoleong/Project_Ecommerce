import { supabase } from "@/utils/supabase";

const getProducts = async () => {
  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    console.error("Error fetching products:", error);
    return [];
  }

  return data;
};

const getProductById = async (id: number) => {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    console.error("Error fetching product by ID:", error);
    return null;
  }
  return data;
};

const getCategories = async () => {
  const { data, error } = await supabase.from("categories").select("*");
  if (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
  return data;
};

const getProductsByCategory = async (categoryId: number) => {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category_id", categoryId);
  if (error) {
    console.error("Error fetching products by category:", error);
    return [];
  }
  return data;
};

const searchProducts = async (query: string) => {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .ilike("name", `%${query}%`);
  if (error) {
    console.error("Error searching products:", error);
    return [];
  }
  return data;
};

const productService = {
  getProducts,
  getProductById,
  getCategories,
  getProductsByCategory,
  searchProducts,
};

export { productService };
