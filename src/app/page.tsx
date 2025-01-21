import NavBar from "@/components/NavBar";
import { HeroVideoDialogDemo } from "@/components/hero"; // Adjust the path to where you have HeroVideoDialogDemo

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <NavBar />

      {/* Hero Section with Flexbox Layout */}
      <section className="flex flex-col md:flex-row items-center justify-center w-full p-8">
        {/* Left side content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Water Management</h1>
          <p className="text-lg mb-4">
            Welcome to the Water Management project! We aim to provide
            innovative solutions for water conservation and efficient usage.
          </p>
          <p className="text-lg mb-4">
            Our system utilizes state-of-the-art technology to monitor and
            manage water resources in real-time. From automated irrigation
            systems to smart sensors, we strive to make water management easier
            and more effective.
          </p>
          <p className="text-lg">
            Join us in creating a sustainable future where every drop counts.
            Water is life, and it's time we protect it together.
          </p>
        </div>

        {/* Right side video dialog */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <HeroVideoDialogDemo />
        </div>
      </section>
    </main>
  );
}
