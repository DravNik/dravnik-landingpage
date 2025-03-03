import NavBar from "@/components/NavBar";
import { HeroVideoDialogDemo } from "@/components/hero";
import PricingWrapper from "@/components/PricingWrapper";
import { HeroDemo } from "@/components/hero-animated";
import { Footer } from "@/components/footer";

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

      <section>
        <Footer />
      </section>
    </main>
  );
}
