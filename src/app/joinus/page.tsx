import NavBar from "@/components/NavBar";
import PricingWrapper from "@/components/PricingWrapper";
import { Footer } from "@/components/footer";

export default function JoinusPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-100">
      <NavBar />
      <PricingWrapper />
      <section>
        <Footer />
      </section>
    </main>
  );
}
