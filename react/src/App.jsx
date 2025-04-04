import react from "react";
import { useRef, useState, useEffect } from "react";

const App = () => {
  const inputRef = useRef(null);
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    
  });

  return (
    <>
      <main className="h-screen w-full flex flex-col justify-center items-center">
        <input
          type="text"
          ref={inputRef}
          placeholder="enter your name"
          onChange={() => setName(inputRef.current.value)}
        />
        <h1>your name is {name}</h1>
      </main>
    </>
  );
};

export default App;
