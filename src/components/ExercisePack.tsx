import { FC } from "react";

import { ExercisePack } from "@/global/types";
import { usePackData } from "@/hooks/usePackData";
import ExerciseRow from "./ExerciseRow";

interface ExercisePackProps {
  tool: ExercisePack;
}

const ExercisePack: FC<ExercisePackProps> = ({
  tool,
}: ExercisePackProps): JSX.Element => {
  const { data, isLoading, isError } = usePackData(tool.code);

  if (isError) return <div>ERROR</div>; //TODO

  if (isLoading) return <div>Loading...</div>; //TODO

  return (
    <>
      {data?.exercises.map((exercise) => (
        <ExerciseRow
          key={exercise.code}
          exercise={exercise}
          packCode={tool.code}
        />
      ))}
    </>
  );
};

export default ExercisePack;
