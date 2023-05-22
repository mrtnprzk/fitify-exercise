import { useExercisePacks } from "@/hooks/useExercisePacks";
import FitifyLogo from "@/components/FitifyLogo";
import ExercisePack from "@/components/ExercisePack";
import FitifyLoader from "@/components/FitifyLoader";

export default function Home() {
    const { data, isLoading, isError } = useExercisePacks();

    if (isError) return <div>ERROR</div>; //TODO

    return (
        <main className="flex flex-col items-center h-screen overflow-hidden px-4 py-8 gap-6 md:p-14 md:gap-11">
            <FitifyLogo />
            <div className="bg-fitifyLightGrey flex flex-col w-full max-w-lg h-full overflow-hidden rounded-lg gap-2 p-4">
                <input disabled={isLoading || !data} />
                <div className="flex flex-col max-h-fit overflow-scroll gap-2">
                    {isLoading && !data ? (
                        <FitifyLoader />
                    ) : (
                        data?.tools.map((tool) => <ExercisePack key={tool.code} tool={tool} />)
                    )}
                </div>
            </div>
        </main>
    );
}
