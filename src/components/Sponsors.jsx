import images from "../constants/images";
import Title from "../constants/Title";

const Sponsors = () => {
  return (
    <section className="bg-gray-200 h-[30vh] inline items-center overflow-hidden ">
      <Title title="Our Partners" />

      <div className="grid grid-cols-2 mb-8 mx-6 items-center gap-4 lg:h-[30vh] lg:grid-cols-6 ">
        <img
          src={images.sponsorsvg1}
          alt="sponsor logo"
          className="h-[100px] px-10 "
        />
        <img
          src={images.sponsorsvg2}
          alt="sponsor logo"
          className="h-[100px] px-10 "
        />
        <img
          src={images.sponsorsvg3}
          alt="sponsor logo"
          className="h-[100px] px-10 "
        />
        <img
          src={images.sponsorsvg4}
          alt="sponsor logo"
          className="h-[100px] px-10 "
        />
        <img
          src={images.sponsorsvg5}
          alt="sponsor logo"
          className="h-[100px] px-10 "
        />
        <img
          src={images.sponsor6}
          alt="sponsor logo"
          className="h-[100px] px-10 "
        />
      </div>
    </section>
  );
};

export default Sponsors;
