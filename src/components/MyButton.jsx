import { useState } from "react";

const MyButton = () => {
  const [clicked, setClicked] = useState(0)

  const handleClick = () => {
    setClicked(clicked + 1);
  }


  return (
    <>
      <p>clicked {clicked} times !</p>
      <button onClick={handleClick}>Click me!</button>
    </>
  );
};

export default MyButton;
