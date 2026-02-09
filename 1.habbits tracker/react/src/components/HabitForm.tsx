import { useState } from "react";
import type { Habit } from "../types/habits.type";

type HabitFormProps = {
  onAddHabit: (habit: Habit) => void;
};

const HabitForm = ({ onAddHabit }: HabitFormProps) => {
  const [desc, setDesc] = useState<string>("");

  const habitSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    onAddHabit({
      id: crypto.randomUUID(),
      description: desc,
    });
    setDesc("");
  };
  return (
    <form action="" onSubmit={habitSubmit}>
      <input
        type="text"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default HabitForm;
