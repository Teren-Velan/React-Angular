import type { Habit } from "../types/habits.type";
import HabitItem from "./HabitItem";

type HabitListProps = {
  habits: Habit[];
  onDeleteHabit: (id: string) => void;
};

const HabitList = ({ habits, onDeleteHabit }: HabitListProps) => {
  return (
    <>
      <ul>
        {habits.map((habit) => {
          return <HabitItem habit={habit} onDeleteHabit={onDeleteHabit} />;
        })}
      </ul>
    </>
  );
};

export default HabitList;
