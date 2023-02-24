import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText((prevChangedText) => !prevChangedText);
  };
  // test ovde nece imati problema
  // jer renderuje ceo component tree
  // kada je vise od jedne komp ukljucena u test to vise nije
  // unit testing vec integration test
  return (
    <div>
      <h2>Hello World</h2>
      {!changedText ? (
        <Output>It's good to see you!</Output>
      ) : (
        <Output>Changed!</Output>
      )}
      <button onClick={changeTextHandler}>Change Text</button>
    </div>
  );
};

export default Greeting;
