import React from "react";
import CatInfo from "../components/catInfo/catInfo";

const Fold= () => {
  return (
    <CatInfo
      name="Scottish Fold"
      desc="The Scottish Fold is a breed of domestic cat with a natural dominant-gene mutation that affects cartilage throughout the body, causing the ears to fold, bending forward and down towards the front of the head, which gives the cat what is often described as an owl-like appearance."
      image={"./images/fold.jpg"}
    />
  );
};

export default Fold;