import React from "react";
import GetAll from "../GetAll";

const Sections = (section) => {
  return (
    <div>
      {section.section.products &&
        section.section.products.map((product, productIdx) => {
          return (
            <GetAll
              product={product}
              key={product._id}
              productIdx={productIdx}
            />
          );
        })}
    </div>
  );
};

export default Sections;
