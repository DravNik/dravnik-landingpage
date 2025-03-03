// app/contact/page.tsx
import NavBar from "@/components/NavBar";

import ContactForm from "@/components/contact-form";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <NavBar />
      <ContactForm />
      <section>
        <Footer />
      </section>
    </main>
  );
}
