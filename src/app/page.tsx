import Footer from "@/components/home/footer";
import Hero from "@/components/home/hero";
import HowItWorks from "@/components/home/howItWorks";
import Navbar from "@/components/home/navbar";

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
