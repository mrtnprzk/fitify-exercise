import { useExercisePacks } from "@/hooks/useExercisePacks";
import FitifyLogo from "@/components/FitifyLogo";
import ExercisePack from "@/components/ExercisePack";

export default function Home() {
  const { data, isLoading, isError } = useExercisePacks();

  if (isError) return <div>ERROR</div>; //TODO

  if (isLoading) return <div>Loading...</div>; //TODO

  return (
    <main className="flex flex-col items-center h-screen overflow-hidden p-14 gap-11">
      <FitifyLogo />
      <div className="bg-fitifyLightGrey flex flex-col w-[38rem] h-full overflow-hidden rounded-lg gap-2 p-4">
        <input />
        <div className="flex flex-col max-h-fit overflow-scroll gap-2">
          {data?.tools?.map((tool) => (
            <ExercisePack key={tool.code} tool={tool} />
          ))}
        </div>
      </div>
    </main>
  );
}
