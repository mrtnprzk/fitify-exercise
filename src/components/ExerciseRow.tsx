import { FC } from "react";
import Image from "next/image";

import { Exercise } from "@/global/types";
interface ExerciseRowProps {
    exercise: Exercise;
    packCode: string;
}

const ExerciseRow: FC<ExerciseRowProps> = ({ exercise, packCode }): JSX.Element => {
    const imageSrc = `${process.env.urlFitify}exercises/${packCode}/thumbnails/${exercise.code}.jpg`;

    return (
        <div className="bg-white flex items-center shadow rounded py-2 px-3 gap-3">
            <Image alt={exercise.code} src={imageSrc} width={40} height={40} />
            <p>{exercise.title}</p>
        </div>
    );
};

export default ExerciseRow;
