import { motion } from "framer-motion";

const Pagination = () => {
  return (
    <div className="flex items-center justify-center space-x-4 my-4">
      <motion.button
        className="py-2 px-4 bg-green-50 text-primary rounded-md shadow border-[.03rem] border-primary hover:bg-primary hover:border-primary hover:text-white transition duration-300"
        whileHover={{ scale: 1.05 }}
      >
        Prev
      </motion.button>
      {/* Page Numbers */}
      {[1, 2, 3].map((page) => (
        <motion.button
          key={page}
          className="w-10 h-10 bg-green-50 text-primary rounded-md shadow border-[.03rem] border-primary hover:bg-primary hover:border-primary hover:text-white transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          {page}
        </motion.button>
      ))}

      <motion.button
        className="py-2 px-4 bg-green-50 text-primary rounded-md shadow border-[.03rem] border-primary hover:bg-primary hover:border-primary hover:text-white transition duration-300"
        whileHover={{ scale: 1.05 }}
      >
        Next
      </motion.button>
    </div>
  );
};

export default Pagination;
