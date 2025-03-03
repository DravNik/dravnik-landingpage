// src/app/product-list/page.tsx

import { ProductList } from "@/components/ProductList";

export default function ProductListPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Products</h1>
      <ProductList />
    </div>
  );
}
