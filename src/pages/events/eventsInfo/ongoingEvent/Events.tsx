import React, { useState } from "react";
import OngoingEvent from "./OngoingEvent";
import EmptyEvents from "./EmptyEvents";
import MyEvents from "./MyEvents";

const Events = () => {
  const [isTrue, setIsTrue] = useState(false);
  return (
    <>
      {!isTrue ? (
        <>
          <OngoingEvent />
          <MyEvents />
        </>
      ) : (
        <>
          <EmptyEvents />
        </>
      )}
    </>
  );
};

export default Events;
