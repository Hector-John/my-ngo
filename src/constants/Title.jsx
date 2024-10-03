import PropTypes from "prop-types";
import images from "./images";

const Title = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center my-8">
      <h1 className="text-3xl lg:text-4xl font-semibold text-[#333] mb-6">
        {title}
      </h1>

      <img
        src={images.separator}
        alt="Title separator"
        className="w-24 lg:w-30"
      />
    </div>
  );
};

// validate em' props
Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
