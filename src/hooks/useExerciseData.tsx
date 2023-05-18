import { useQuery } from "@tanstack/react-query";

import { Exercises } from "@/global/types";

export function useExerciseData() {
  const { data, isLoading, isError } = useQuery<Exercises>({
    queryKey: ["exercises"],
    queryFn: ({ signal }) =>
      fetch(`${process.env.urlFitify}exercises/manifest_v6.json`, {
        signal,
      }).then((res) => res.json()),
  });

  return { data, isLoading, isError };
}
