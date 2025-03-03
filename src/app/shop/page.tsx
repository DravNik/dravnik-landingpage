// src/app/page.tsx

import { ProductList } from "@/components/ProductList";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Welcome to My E-Commerce!</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Explore the latest electronics, motors, sensors, and more.
      </p>

      {/* Products Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">All Products</h2>
        <ProductList />
      </section>
    </div>
  );
}
