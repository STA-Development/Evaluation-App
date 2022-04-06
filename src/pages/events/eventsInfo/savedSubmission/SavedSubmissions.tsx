import React, { useState } from "react";
import EmptySavedSubmission from "./EmptySavedSubmission";

const SavedSubmissions = () => {
  const [isTrue, setIsTrue] = useState(true);
  return (
    <>
      {isTrue ? (
        <>
          <EmptySavedSubmission />
        </>
      ) : null}
    </>
  );
};

export default SavedSubmissions;
