// src/components/ProductList.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/CartProvider"; // optional if you want Add to Cart

type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
};

const initialProducts: Product[] = [
  {
    id: 1,
    name: "DC Motor",
    image:
      "https://images.unsplash.com/photo-1581092929867-2d5453a1d3c9?auto=format&w=720&q=80",
    price: 9.99,
  },
  {
    id: 2,
    name: "Servo Motor",
    image:
      "https://images.unsplash.com/photo-1581091215367-352d8ab1441f?auto=format&w=720&q=80",
    price: 14.99,
  },
  {
    id: 3,
    name: "Ultrasonic Sensor",
    image:
      "https://images.unsplash.com/photo-1581091215619-98cf28e1f5b1?auto=format&w=720&q=80",
    price: 5.49,
  },
  {
    id: 4,
    name: "IR Sensor",
    image:
      "https://images.unsplash.com/photo-1593621058953-ef63c8b1b8d1?auto=format&w=720&q=80",
    price: 3.99,
  },
  {
    id: 5,
    name: "GSM Module",
    image:
      "https://images.unsplash.com/photo-1605520239826-0a7f23a0fca2?auto=format&w=720&q=80",
    price: 19.99,
  },
  {
    id: 6,
    name: "Arduino Uno",
    image:
      "https://images.unsplash.com/photo-1581091215663-f8d1e37f53b2?auto=format&w=720&q=80",
    price: 25.99,
  },
  {
    id: 7,
    name: "Arduino Mega",
    image:
      "https://images.unsplash.com/photo-1581091215404-6ec3f9a6ab25?auto=format&w=720&q=80",
    price: 34.99,
  },
  {
    id: 8,
    name: "ESP8266 WiFi Module",
    image:
      "https://images.unsplash.com/photo-1570528520910-4ac2c130b4cd?auto=format&w=720&q=80",
    price: 8.99,
  },
  {
    id: 9,
    name: "Temperature Sensor (DHT11)",
    image:
      "https://images.unsplash.com/photo-1599360884497-6bff2f43dd4e?auto=format&w=720&q=80",
    price: 2.49,
  },
  {
    id: 10,
    name: "Stepper Motor",
    image:
      "https://images.unsplash.com/photo-1581092929867-2d5453a1d3c9?auto=format&w=720&q=80",
    price: 12.99,
  },
];

export function ProductList() {
  const [products] = useState<Product[]>(initialProducts);
  const { addToCart } = useCart(); // from CartProvider

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-md p-4 flex flex-col items-center justify-between bg-white dark:bg-gray-800"
        >
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            className="object-contain mb-4"
          />
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            {product.name}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            ${product.price.toFixed(2)}
          </p>
          <Button
            variant="default"
            className="mt-4"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </Button>
        </div>
      ))}
    </div>
  );
}
