import { useState } from "react";
import type { Habit } from "./types/habits.type";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";

function App() {
  const [habits, setHabits] = useState<Habit[]>([]);

  const addHabit = (habit: Habit) => {
    setHabits((prev) => [...prev, habit]);
  };

  const deleteHabit = (id: string) => {
    setHabits((prev) => prev.filter((currHabit) => currHabit.id !== id));
  };

  return (
    <>
      <main>
        <h1 className="title">Habit tracker</h1>
        <div>Add Habit</div>

        <HabitForm onAddHabit={addHabit} />

        <div>Habit List</div>

        <HabitList habits={habits} onDeleteHabit={deleteHabit} />
      </main>
    </>
  );
}

export default App;
