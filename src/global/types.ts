export type Category = {
  cardio: number;
  plyometric: number;
  lower_body: number;
  upper_body: number;
  shoulder_and_back: number;
  core: number;
  stretching: number;
  yoga: number;
  balance: number;
  warmup: number;
};

export type MuscleIntensity = {
  lats: number;
  abs: number;
};

export type Exercise = {
  code: string;
  title: string;
  category: Category;
  stance: string;
  skill_required: number;
  skill_max: number;
  sexyness: number;
  looks_cool: number;
  impact: number;
  noisy: number;
  change_sides: false;
  sets: unknown; //TODO
  constraint_positive: string;
  constraint_negative: string;
  duration: number;
  reps: number;
  reps_double: false;
  reps_count_times: [];
  reps_hint: string;
  reps_preferred: false;
  weight_supported: false;
  tool: string;
  muscle_intensity: MuscleIntensity;
  instructions: unknown; //TODO
};

export type ExercisesFromPack = {
  exercises: Array<Exercise>;
};

export type ExercisePack = {
  code: string;
  exercise_count: number;
  size: number;
  version: number;
};

export type AllExercisePacks = {
  tools: Array<ExercisePack>;
};
