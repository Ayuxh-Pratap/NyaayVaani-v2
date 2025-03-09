import Footer from "@/components/footer";
import Hero from "@/components/hero";
import HowItWorks from "@/components/howItWorks";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
        <HowItWorks />
        <Footer />
      </div>
    </main>
  );
}
