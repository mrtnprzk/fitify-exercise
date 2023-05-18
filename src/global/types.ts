export type Exercise = {
  code: string;
  exercise_count: number;
  size: number;
  version: number;
};

export type Exercises = {
  tools: Array<Exercise>;
};
