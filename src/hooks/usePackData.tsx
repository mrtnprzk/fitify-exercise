import { ExercisesFromPack } from "@/global/types";
import { useQuery } from "@tanstack/react-query";

export function usePackData(packCode: string) {
  const { data, isLoading, isError } = useQuery<ExercisesFromPack>({
    queryKey: ["pack", packCode],
    queryFn: ({ signal }) =>
      fetch(
        `${process.env.urlFitify}exercises/${packCode}/exercises_${packCode}_v5.json`,
        {
          signal,
        }
      ).then((res) => res.json()),
  });

  return { data, isLoading, isError };
}
