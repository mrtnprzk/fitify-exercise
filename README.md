# FITIFY :weight_lifting_man: :lotus_position_woman:

## Getting Started

### Starting a local server

You need `node` (preferably the latest LTS version) and install node_modules:

```bash
npm install
```

then run:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
The application should automatically reload and show any changes made in the `src` folder.

### Check any lint errors in terminal

```bash
npm run lint
```

---------------------------------------------------------------------------
## Fitify Sample Project

Your task is to create a simple web app in React.js that will help users learn new exercises with a proper technique.

The app should present the list combining all exercises from our database. The exercise database consists of several exercise packs available via JSON REST API. You should first fetch the manifest containing all available exercise packs, then fetch the content of all exercise packs and merge them into a single list.

The user should be able to search in the exercise database by typing the exercise title in the search field. The app should update the results as the user types. The part of the title matching the query should be highlighted in the results using a bold font style.

The user should be able to click on any exercise item to show the exercise preview dialog. The dialog should contain the exercise video and instructions. The IDs of the instruction strings are defined in the instructions.hints field of the exercise object. You should use the provided instructions.json file to resolve the string content based on its ID.

### [Figma Design](https://www.figma.com/file/eSxkikHtvXrD3aMFAQdzPr/Fitify-Sample-Project-Frontend---Exercise-List?node-id=1%3A82)

### Exercise API
- Returns the list of exercise packs https://static.gofitify.com/exercises/manifest_v6.json
- Returns the list of exercises in the exercise pack with the specified code https://static.gofitify.com/exercises/[pack_code]/exercises_[pack_code]_v5.json
- The exercise thumbnail https://static.gofitify.com/exercises/[pack_code]/thumbnails/[exercise_code].jpg
- The exercise video https://static.gofitify.com/exercises/[pack_code]/videos/[exercise_code].mp4

### [Instruction Strings](https://drive.google.com/file/d/1p1hiCxq_M9NGLroPT38B0AhHCy1PzC5U/view?usp=sharing)