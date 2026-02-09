import { useState } from "react";
import type { Habit } from "./types/habits.type";

function App() {
  const [habits, setHabits] = useState<Habit[]>([]);

  const [desc, setDesc] = useState<string>("");

  const generateId = () => crypto.randomUUID();

  const addHabit = (habit: Habit) => {
    setHabits((prev) => [...prev, habit]);
  };

  const deleteHabit = (id: string) => {
    setHabits((prev) => prev.filter((currHabit) => currHabit.id !== id));
  };

  const habitSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    addHabit({
      id: generateId(),
      description: desc,
      priority: "low",
      time: "13:00",
    });
    setDesc("");
  };

  console.log(habits);

  return (
    <>
      <main>
        <h1 className="title">Habit tracker</h1>
        <div>Add Habit</div>
        <form action="" onSubmit={habitSubmit}>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>

        <div>Habit List</div>
        <ul>
          {habits.map((habit) => {
            return (
              <li key={habit.id}>
                <p>{habit.description}</p>
                <p>{habit.priority}</p>
                <p>{habit.time}</p>
                <button onClick={() => deleteHabit(habit.id)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}

export default App;
