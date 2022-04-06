import React, { useState } from "react";
import EmptySubmission from "./EmptySubmission";

const Submissons = () => {
  const [isTrue, setIsTrue] = useState(true);
  return (
    <>
      {isTrue ? (
        <>
          <EmptySubmission />
        </>
      ) : null}
    </>
  );
};

export default Submissons;
