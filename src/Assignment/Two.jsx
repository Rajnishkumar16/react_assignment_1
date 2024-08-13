import { useState } from "react";

const Two = ({ text }) => {
  const [Text, setText] = useState([""]);
  return (
    <>
      <button onClick={(text) => setText([])}>Click Me</button>
    </>
  );
};

export default Two;
