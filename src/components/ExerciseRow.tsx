import { FC } from "react";

import { Exercise } from "@/global/types";

interface ExerciseRowProps {
  exercise: Exercise;
  packCode: string;
}

const ExerciseRow: FC<ExerciseRowProps> = ({
  exercise,
  packCode,
}): JSX.Element => {
  //TODO img fetch
  //TODO video fetch

  return (
    <div className="bg-white shadow">
      <p>{exercise.title}</p>
    </div>
  );
};

export default ExerciseRow;
