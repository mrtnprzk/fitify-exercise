import { FC } from "react";

import { ExercisePack } from "@/global/types";
import { usePackData } from "@/hooks/usePackData";
import ExerciseRow from "./ExerciseRow";
import { useRouter } from "next/router";

interface ExercisePackProps {
    tool: ExercisePack;
}

const ExercisePack: FC<ExercisePackProps> = ({ tool }: ExercisePackProps): JSX.Element => {
    const { data, isLoading, isError } = usePackData(tool.code);
    const router = useRouter();

    if (!isLoading && isError) router.push("/error");

    if (isLoading) return <div>Loading...</div>; //TODO

    return (
        <>
            {data?.exercises.map((exercise) => (
                <ExerciseRow key={exercise.code} exercise={exercise} packCode={tool.code} />
            ))}
        </>
    );
};

export default ExercisePack;
