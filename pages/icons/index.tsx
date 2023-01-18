import React, { useContext } from "react";
import { FaSlackHash } from "react-icons/fa";
import Cards from "../../components/cards";

const Icons = () => {
  return (
    <section className="md:mt-0 mt-20 md:p-0 p-5">
      <div className="flex itmes-center text-white text-3xl my-4 font-bold uppercase">
        <FaSlackHash className="mt-1 mr-2 text-gray-400" />
          Icons
      </div>
      <Cards />
    </section>
  );
};

export default Icons;
