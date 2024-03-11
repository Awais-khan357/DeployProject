import React, { useState, useEffect } from "react";
function PracLogic() {
  let dataVal = 20;
  let interval = 200;
  const [count, setCount] = useState(0);

  return <div>{count}</div>;
}

export default PracLogic;
