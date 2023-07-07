import Button from "./Button";
import axios from "axios";
import { useState } from "react";

type TasksData = {
  id: string;
  title: string;
};

export default function Tasks() {
  const [tasks, setTasks] = useState<TasksData[]>([]);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const handleGetTasks = async () => {
    try {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10");

      setTasks(data);
      setErrorMessage(null);
    } catch (error: any) {
      setErrorMessage(error?.message);
    }
  };

  return (
    <>
      <h1>Tasks from API</h1>
      <Button disabled={false} onClick={handleGetTasks}>
        Get tasks from API
      </Button>

      {tasks.length > 0 &&
        tasks.map((task) => {
          return (
            <p key={task.id}>
              task: {task.id} - {task.title}
            </p>
          );
        })}

      {errorMessage}
    </>
  );
}
