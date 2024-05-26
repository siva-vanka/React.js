import React, { useEffect } from "react";
import { useState } from "react";
import useTimer from "./useTimer";

const Timer1 = () => {
  const showTimer = useTimer(20000);

  return <>{showTimer && <div>Timer1</div>}</>;
};

export default Timer1;
