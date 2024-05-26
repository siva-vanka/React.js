import React, { useEffect } from "react";
import { useState } from "react";
import useTimer from "./useTimer";

const Timer2 = () => {
  const showTimer = useTimer(10000);
  return <>{showTimer && <div>Timer2</div>}</>;
};

export default Timer2;
