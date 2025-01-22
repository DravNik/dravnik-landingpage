import NavBar from "@/components/NavBar";
import { HeroVideoDialogDemo } from "@/components/hero";
import PricingWrapper from "@/components/PricingWrapper";
import { HeroDemo } from "@/components/hero-animated";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-100">
      <NavBar />

      {/* Hero Section - Animated Hero */}
      <section className="min-h-screen w-full flex items-center justify-center">
        <HeroDemo />
      </section>

      {/* Hero Section - Original */}
      <section className="flex flex-col md:flex-row items-center justify-center w-full p-8 min-h-screen">
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <HeroVideoDialogDemo />
        </div>
      </section>

      <PricingWrapper />

      <footer className="w-full bg-gray-800 text-white py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <div className="text-lg font-bold mb-4 md:mb-0">Water Management</div>

          <ul className="flex flex-wrap items-center justify-center space-x-4 mb-4 md:mb-0">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>

          <div className="text-sm text-right">
            <p>Location: 123, NIBM, Pune</p>
            <p>Email: admin@watermanagement.com</p>
            <p>Phone: 4894548465</p>
          </div>
        </div>

        <div className="border-t border-gray-700 justify-between text-center text-xs py-1 mt-4">
          © {new Date().getFullYear()} Water Management. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
