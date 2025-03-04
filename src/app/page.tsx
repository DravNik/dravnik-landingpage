import NavBar from "@/components/NavBar";
import { HeroVideoDialogDemo } from "@/components/hero";
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
        <div className="flex flex-col gap-4 max-w-2xl text-center md:text-left md:pr-8 font-medium">
          <strong className="flex flex-col md:flex-row items-center justify-center text-3xl">
            Vision
          </strong>
          For centuries, we’ve managed water the same way—inefficiently,
          wastefully, blindly. It’s time for something better. DravNik is not
          just a water management system. It’s a revolution. We are reimagining
          how water moves, how it’s used, and how it’s controlled—effortlessly,
          intelligently, and sustainably. Whether in homes, apartments, or
          entire cities, our technology eliminates waste, optimizes every drop,
          and puts control at your fingertips. The future isn’t just about
          conserving water. It’s about mastering it. And with DravNik, that
          future starts today.
        </div>
        <HeroVideoDialogDemo />
      </section>

      <section>
        <Footer />
      </section>
    </main>
  );
}
