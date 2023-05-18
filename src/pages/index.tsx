import Image from "next/image";

import { useExerciseData } from "@/hooks/useExerciseData";

export default function Home() {
  const { data, isLoading, isError } = useExerciseData();

  if (isError) return <div>ERROR</div>; //TODO

  if (isLoading) return <div>Loading...</div>; //TODO

  return (
    <main className="text-green-500">
      <Image
        priority
        src="images/fitify.svg"
        alt="Fitify Logo"
        width={200}
        height={75}
        className="h-auto w-40"
      />
      {data?.tools?.map((tool) => (
        <div className="m-4 bg-gray-500" key={tool.code}>
          <p>CODE: {tool.code}</p>
          <p>exercise_count: {tool.exercise_count}</p>
          <p>size: {tool.size}</p>
          <p>version: {tool.version}</p>
        </div>
      ))}
    </main>
  );
}
