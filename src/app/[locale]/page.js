
import Services from "@/components/services/Services";
import About from "@/components/about/about";
import Partner from "@/components/Partner/Partner";
import Slider from "@/components/slider/Slider";
export default function Home({ params }) {
  return (
    <main>
      <Slider />
      <About  />
      <Services params={params} />
      {/* <Partner /> */}

    </main>
  );
}
