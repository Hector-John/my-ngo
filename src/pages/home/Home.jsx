import Hero from "./Hero";
import Work from "./Work";
import Cta from "./Cta";
import Bio from "./Bio";
import Mission from "./Mission";
import Testimonial from "../../components/Testimonial";
import Goals from "../../components/Goals";
import DonateCta from "../../components/DonateCta";
import Sponsors from "../../components/Sponsors";
 
const Home = () => {
  return (
    <section>
      <div className="">
        <Hero />
        <Mission/>
        <Bio/>
        <Goals/>
        <Cta />
        <Work />
        <DonateCta/>
        <Sponsors/>
        <Testimonial/>
      </div>
    </section>
  );
};

export default Home;
