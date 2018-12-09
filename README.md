# GeckoMeterNg

## Acceptance Criteria

[ACC-001] As a User, I want to land on home screen with start button

[ACC-002] As a User, I want to click on "Start" button to start Gecko-Meter

[ACC-003] As a User, I want to have 2 modes for displaying meter results

[ACC-004] As a User, I want to click on "Single Mode" button to get one result on Gecko-Meter

[ACC-005] As a User, I want to click on "Interval Mode" button to get to show Interval mode functionaility

[ACC-006] As a User, I want to have the option to choose the seconds interval between each backend call

[ACC-007] As a User, I want to be able to start and stop the interval calls

[ACC-008] As a User, I want to be able to close interval functionaility

[ACC-009] As a User, I want to click on Interval Mode start button to get updated results on Gecko-Meter

[ACC-010] As a User, I want to click on Interval Mode stop button to stop updating results on Gecko-Meter

[ACC-011] As a User, I want to display an error message with red notification, showing the user what went wrong in case of errors

[TEC-ACC01] As a developer, I want to validate on configuration response, and exclude invalid responses (Value/Min/Max not returned, Max greater than Min

[TEC-ACC02] As a developer, I want to display Currency according to the format returned from response

[TEC-ACC03] As a developer, I want to hide currecny symbol is not returned from response

[TEC-ACC04] As a developer, I want to unsubscrive from interval observable in case the interval stop button is clicked


## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

To check coverage report, please open (using browser) `./coverage/index.html` after running `npm run start`


## What could have ben done better

- Follow TDD, as unit tests were written after development, because I didnt have clear requirements, and requirements were built up with developing and brainstroming at the same time, because if tight schedule.

- Write e2e test using protractor, and this could not been achieved because of the lack of High level scenarios.

- Sainty checks on different browsers and versions.

- Handle different currencies (using angular currency meter) and units for the meter

- Fix the remainig unit tests, as i couldn't have time to fix it all

- Implement ReactJs version of the app :)
