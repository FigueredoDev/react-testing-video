import { useState } from "react";
import Button from "./components/Button";

export default function App() {
  const [message, setMessage] = useState("Let's learn more about testing in React");

  return (
    <div>
      <h1>Hello world!</h1>
      <p>{message}</p>
      <Button disabled onClick={() => setMessage("New message!")}>
        Change message
      </Button>
    </div>
  );
}
