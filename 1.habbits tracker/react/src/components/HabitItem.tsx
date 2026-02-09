import type { Habit } from "../types/habits.type";

type HabitItemProps = {
  habit: Habit;
  onDeleteHabit: (id: string) => void;
};

const HabitItem = ({ habit, onDeleteHabit }: HabitItemProps) => {
  return (
    <>
      <li key={habit.id}>
        <p>{habit.description}</p>
        <button onClick={() => onDeleteHabit(habit.id)}>Delete</button>
      </li>
    </>
  );
};

export default HabitItem;
