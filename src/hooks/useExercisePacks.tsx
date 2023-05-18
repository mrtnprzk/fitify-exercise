import { useQuery } from "@tanstack/react-query";

import { AllExercisePacks } from "@/global/types";

export function useExercisePacks() {
  const { data, isLoading, isError } = useQuery<AllExercisePacks>({
    queryKey: ["exercise-packs"],
    queryFn: ({ signal }) =>
      fetch(`${process.env.urlFitify}exercises/manifest_v6.json`, {
        signal,
      }).then((res) => res.json()),
  });

  return { data, isLoading, isError };
}
